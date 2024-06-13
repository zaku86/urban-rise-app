import Container from "./Container";
import Button from "./Button";
import { FaGreaterThan } from "react-icons/fa6";
import Line from "./Line";
import home from "../assets/home.png";

function OurServices() {
  return (
    <div className="padding-class services-bg">
      <Container>
        <Line />
        <div className="title-div">
          <div>
            <h1 className="section-title">OUR SERVICES</h1>
            <p className="body-text">
              Take A Look At The Variety Of Services We Provide To Make Your
              Dreams Are Reality{" "}
            </p>
          </div>
          <div>
            <Button
              text={"See All"}
              Icon={<FaGreaterThan />}
              isSecondary
              textSecondary
            />
          </div>
        </div>
        <div className="service-line-container">
          <div className="service-line">
            <div>
              <img src={home} alt="" />
            </div>
            <div>
              <h2 className="service-text">Residential</h2>
              <p className="body-text">
                Design And Constuction Of Custom Homes, Villas,Apartments And
                Townhouses.
              </p>
            </div>
            <div>
              <p className="body-text2">Learn More</p>
            </div>
          </div>
          <div className="service-line">
            <div>
              <img src={home} alt="" />
            </div>
            <div>
              <h2 className="service-text">Residential</h2>
              <p className="body-text">
                Design And Constuction Of Custom Homes, Villas,Apartments And
                Townhouses.
              </p>
            </div>
            <div>
              <p className="body-text2">Learn More</p>
            </div>
          </div>
          <div className="service-line">
            <div>
              <img src={home} alt="" />
            </div>
            <div>
              <h2 className="service-text">Residential</h2>
              <p className="body-text">
                Design And Constuction Of Custom Homes, Villas,Apartments And
                Townhouses.
              </p>
            </div>
            <div>
              <p className="body-text2">Learn More</p>
            </div>
          </div>
          <div className="service-line">
            <div>
              <img src={home} alt="" />
            </div>
            <div>
              <h2 className="service-text">Residential</h2>
              <p className="body-text">
                Design And Constuction Of Custom Homes, Villas,Apartments And
                Townhouses.
              </p>
            </div>
            <div>
              <p className="body-text2">Learn More</p>
            </div>
          </div>
          <div className="service-line">
            <div>
              <img src={home} alt="" />
            </div>
            <div>
              <h2 className="service-text">Residential</h2>
              <p className="body-text">
                Design And Constuction Of Custom Homes, Villas,Apartments And
                Townhouses.
              </p>
            </div>
            <div>
              <p className="body-text2">Learn More</p>
            </div>
          </div>
          <div className="service-line">
            <div>
              <img src={home} alt="" />
            </div>
            <div>
              <h2 className="service-text">Residential</h2>
              <p className="body-text">
                Design And Constuction Of Custom Homes, Villas,Apartments And
                Townhouses.
              </p>
            </div>
            <div>
              <p className="body-text2">Learn More</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurServices;
