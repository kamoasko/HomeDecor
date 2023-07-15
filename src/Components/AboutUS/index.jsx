import React from "react";
import "./about.css";
import about from "../../assets/images/AboutUs/About.png";
import { useLocation } from "react-router-dom";
import SecondaryButtons from "../SecondaryButtons";

function AboutUs() {
  return (
    <section className="about">
      <div className="container">
        <h2>ABOUT US</h2>
        <div className="about__desc flex">
          <div className="about__desc-image">
            <img src={about} />
          </div>
          <div className="about__desc-content">
            {useLocation().pathname == "/about" ? (
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus. <br />
                <br /> Temporibus autem quibusdam et aut officiis debitis aut
                rerum necessitatibus saepe eveniet ut et voluptates repudiandae
                sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores
                alias consequatur aut perferendis doloribus asperiores repellat.
                <br />
                <br /> Itaque earum rerum hic tenetur a sapiente delectus, ut
                aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat et voluptates
                repudiandae sint et molestiae non
              </p>
            ) : (
              <>
                <p>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. <br />
                  <br /> Temporibus autem quibusdam et aut officiis debitis aut
                  rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae non recusandae. Itaque earum
                  rerum hic tenetur a sapiente delectus, ut aut reiciendis
                  voluptatibus maiores alias consequatur aut perferendis
                  doloribus asperiores repellat.
                </p>
                <div className="about__desc-btn">
                  <SecondaryButtons
                    text="LEARN MORE"
                    icon={false}
                    link="/about"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
