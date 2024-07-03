import interior from "../assets/interior.png";
import Line from "./Line";
import Container from "./Container";
import Button from "./Button";
import { FaGreaterThan } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import modern from "../assets/modern.png";
import commercial from "../assets/commercial.png";
import structural from "../assets/structural.png";
import HeaderParagraph from "./HeaderParagraph";
import house from "../assets/house.jpeg";
const data = [
  {
    img: house,
    title: "Interiors Designs",
    description:
      "Step Into A World Of Captivating Commercial Spaces Designed To Elevate Your Business.",
    type: "Interior",
    date: "Aug 2024",
  },
  {
    img: house,
    title: "Structural Repair",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business. ",
    type: "Complex",
    date: "Aug 2024",
  },
  {
    img: house,
    title: "Commercial Complex",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business. ",
    type: "Complex",
    date: "Aug 2024",
  },
  {
    img: house,
    title: "Residential Building",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business.",
    type: "Building",
    date: "Aug 2024",
  },
];

function Interior() {
  return (
    <div className="hero-section">
      <Container>
        <div className="interior-container">
          {/* <SectionHeader title={"some title"} description={"some description"} lightMode /> */}
          <HeaderParagraph
            title={"RECENT PROJECTS"}
            description={
              "Recent Projects Showcasing Our Craftsmanship and Innovation in Construction"
            }
            isLightMode
          />

          <div className="projects-card">
            {data.map((el, index) => (
              <div key={index} className="card">
                <div className="img-container3">
                  <img src={el.img} alt="" />
                </div>

                <div className="card-content">
                  <div className="card-text-div">
                    <h3>{el.title}</h3>
                    <p className="card-paragraph">{el.description}</p>
                  </div>
                  <div className="div-with-dot">
                    <div>
                      <p className="card-paragraph">
                        {el.type} <BsDot />
                        {el.date}
                      </p>
                    </div>
                    <div>
                      <Button
                        Icon={<FaArrowRight className="arrow" />}
                        isSecondary
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Interior;
