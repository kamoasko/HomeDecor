import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:5000/users"); // Replace with your API endpoint to fetch user data
        if (res.ok) {
          const userData = await res.json();
          setUser(userData); // Save the fetched user data to the context
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
