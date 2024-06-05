import Container from "./Container";
import logo from "../assets/logo.png";
import Button from "./Button";

function Header() {
  return (
    <Container>
      <div className="header-container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="header-content">
          <p className="link-item">About us</p>
          <p className="link-item">Projects</p>
          <p className="link-item">Services</p>
          <p className="link-item">Our Team</p>
          <Button text={"Sign Up"} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
