import Container from "./Container";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const data = [
  {
    title: "Company",
    text1: "About us",
    text2: "Projects",
    text3: "Services",
    text4: "Our team",
  },
  {
    title: "Help",
    text1: "Contact Us",
    text2: "FAQs",
    text3: "Support",
    text4: "Feedback",
  },
  {
    title: "Others",
    text1: "Privacy",
    text2: "Terms",
    text3: "Cookie",
    text4: "Policies",
  },
];

function FooterSection() {
  return (
    <div className="padding-class footer-bg footer-main-div">
      <Container>
        <div className="footer-container">
          <div className="text-container2">
            <div className="text-div">
              <h2>
                Urban <span className="logo">Rise</span>{" "}
              </h2>
              <p className="footer-text body-text">
                We Are More Than Just Builders; We Are Creators Of Architectural
                Marvels. With A Passion For Excellence And An Unwavering
                Commitment To Quality.
              </p>
            </div>
            <div className="socials-container">
              <FaFacebookF className="body-text" />
              <FaLinkedinIn className="body-text" />
              <CiInstagram className="body-text" />
            </div>
          </div>
          <div className="about-company-container">
            {data.map((el, index) => {
              return (
                <div key={index} className="container-one">
                  <div className="about-company">
                    <h3>{el.title}</h3>
                  </div>
                  <div className="p-container">
                    <p className="body-text">{el.text1}</p>
                    <p className="body-text">{el.text2}</p>
                    <p className="body-text">{el.text3}</p>
                    <p className="body-text">{el.text4}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FooterSection;
