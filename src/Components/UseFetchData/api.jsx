const BASE_URL = "http://localhost:5000"; // base URL

export async function fetchData(endpoint) {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
