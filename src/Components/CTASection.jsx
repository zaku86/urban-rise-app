import Button from "./Button";
import Container from "./Container";
import Line from "./Line";
import image from "../assets/image.png";

function CTASection() {
  return (
    <div className="hero-section CTA padding-class">
      <Container>
        <div className="main-cta-container">
          <div>
            <div className="text-container">
              <Line />
              <h2>Let's Build Together</h2>
              <p>
                Contact us If you have anything in mind, We will help you build.
              </p>
            </div>
            <div className="button-container">
              <Button text={"Contact Us"} />
              <Button text={"Free Consultation"} isSecondary />
            </div>
          </div>
          <div className="image-container3">
            <img src={image} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CTASection;
