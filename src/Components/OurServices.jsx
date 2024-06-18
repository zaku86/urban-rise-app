import Container from "./Container";
import Button from "./Button";
import { FaGreaterThan } from "react-icons/fa6";
import Line from "./Line";
import home from "../assets/home.png";
import HeaderParagraph from "./HeaderParagraph";

const data = [
  {
    title: "Residential",
    description:
      "Design and construction of custom homes, villas, apartments, and townhouses",
  },
  {
    title: "Commercial",
    description:
      "Building offices, retail spaces, and restaurants, warehouses, commercial structures",
  },
  {
    title: "Renovations",
    description:
      "Quality Refurbishment, renovation, and modernization of your  existing properties",
  },
  {
    title: "Landscaping",
    description:
      "Creating beautiful outdoor landscapes, gardens, and creational areas.",
  },
  {
    title: "Interiors Designs",
    description:
      "Design and construction of office interiors, retail stores, and commercial spaces.",
  },
  {
    title: "Structural Repair",
    description:
      "Fully Strengthening and repairing your existing structures for safety and longevity.",
  },
];

function OurServices() {
  return (
    <div className="padding-class services-bg">
      <Container>
        <HeaderParagraph
          title={"OUR SERVICES"}
          description={
            "Take A Look At The Variety Of Services We Provide To Make Dreams Are Reality"
          }
        />
        <div className="service-line-container">
          {data.map((el, index) => (
            <div key={index} className="service-line">
              <div>
                <img src={home} alt="" />
              </div>
              <div>
                <h2 className="service-text">{el.title}</h2>
                <p className="body-text">{el.description}</p>
              </div>
              <div>
                <p className="body-text3">Learn More</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default OurServices;
