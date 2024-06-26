import Button from "./Button";
import Container from "./Container";
import HeaderParagraph from "./HeaderParagraph";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import SimpleSlider from "./SimpleSlider";
const data = [
  {
    img: Avatar,
    text: "“I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.”",
    name: "-Mary Johnson",
    description: "Homeowner",
  },
  {
    img: Avatar1,
    text: "“I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.”",
    name: "-David Lee",
    description: "Property Developer",
  },
  {
    img: Avatar2,
    text: "“I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.”",
    name: "-Sarah Miller",
    description: "Hotel Owner",
  },
];

function FeedbackSection() {
  return (
    <div className="padding-class">
      <Container>
        <HeaderParagraph
          title={"Customer Feedbacks"}
          description={
            "Don't Just Take Our Word For It; Hear Directly From Our Valued Clients"
          }
        />
        <div className="feedback-container">
          {data.map((el, index) => {
            return (
              <div key={index} className="feedback-cart">
                <div>
                  <img src={el.img} />
                </div>
                <div>
                  <p className="body-text feedback-text">{el.text}</p>
                </div>
                <div className="homeowner">
                  <p className="name">{el.name}</p>
                  <p className="name-description">{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <SimpleSlider /> */}
      </Container>
    </div>
  );
}

export default FeedbackSection;
