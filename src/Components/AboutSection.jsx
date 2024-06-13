import aboutImg from "../assets/aboutImg.png";
import Container from "./Container";
import Line from "./Line";

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
              <div>
                <p className="number-text">600+ </p>
                <p className="body-text2">Worked With 600+ Big Companies</p>
              </div>
              <div>
                <p className="number-text">800+</p>
                <p className="body-text2">Projects Completed Successfully</p>
              </div>
              <div>
                <p className="number-text">99%</p>
                <p className="body-text2">We Stand With 99% Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutSection;
