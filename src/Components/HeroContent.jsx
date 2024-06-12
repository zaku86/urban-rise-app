import Container from "./Container";
import heroImg from "../assets/heroImg.png";
import Button from "./Button";

function HeroContent() {
  return (
    <Container>
      <div className="hero-content-container">
        <div className="left-hero">
          <h1 className="hero-title">Crafting Archittectural Wonders</h1>
          <p className="body-text">
            Your Ideas & Dreams Are Transformed By Us Into Long-Lasting,
            Engineered Buildings.
          </p>
          <div className="button-container">
            <Button text={"Contact Us"} largeBtn />
            <Button text={"Free Consultation"} isSecondary />
          </div>
          <p className="body-text">
            <span>*</span> All Our Projects Are Curated By Experts.
          </p>
        </div>
        <div className="right-hero">
          <img src={heroImg} alt="img" />
        </div>
      </div>
    </Container>
  );
}

export default HeroContent;
