import aboutImg from "../assets/aboutImg.png";
import Container from "./Container";
import Line from "./Line";

const data = [
  {
    numberText: "600 +",
    text: "Worked With 600+ Big Companies",
  },
  {
    numberText: "800 +",
    text: "Projects Completed Successfully",
  },
  { numberText: "99%", text: "We Stand With 99% Success Rate" },
];

function AboutSection() {
  return (
    <div className="padding-class about-bg">
      <Container>
        <div className="about-section-container">
          <div className="img-container">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-right-div">
            {/* line */}
            <Line isDark />
            <h1 className="section-title">
              Take A Glimpse Into Our Construction Voyage
            </h1>
            <p className="body-text">
              A Trailblazer In The Construction Industry. Our Journey Is One Off
              Passion,Dedication, And A Relentless Pursuit Of Exellence.
            </p>
            <div className="about-right-div-text">
              {data.map((el, index) => {
                return (
                  <div key={index}>
                    <p className="number-text">{el.numberText} </p>
                    <p className="body-text2">{el.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
