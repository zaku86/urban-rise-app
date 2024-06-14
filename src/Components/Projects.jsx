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

function Interior() {
  return (
    <div className="hero-section">
      <Container>
        <div className="interior-container">
          <div className="interior-text-div">
            <div>
              <Line />
              <h2 className="section-title">Recents Projects</h2>
              <p className="body-text">
                Recents Projects Showcasing Our Craftmanship And Innovation In
                Construction
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

          <div className="projects-card">
            <div className="card">
              <div>
                <img src={interior} alt="" />
              </div>

              <div className="card-content">
                <div className="card-text-div">
                  <h3>Interior Designs</h3>
                  <p className="card-paragraph">
                    Step Into A World Of Captivating Commercial Spaces Designed
                    To Elevate Your Business.
                  </p>
                </div>
                <div className="div-with-dot">
                  <div>
                    <p>
                      <p className="card-paragraph">
                        Interior <BsDot />
                        Aug 2022
                      </p>
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

            <div className="card">
              <div>
                <img src={modern} alt="" />
              </div>

              <div className="card-content">
                <div className="card-text-div">
                  <h3>Interior Designs</h3>
                  <p className="card-paragraph">
                    Step Into A World Of Captivating Commercial Spaces Designed
                    To Elevate Your Business.
                  </p>
                </div>
                <div className="div-with-dot">
                  <div>
                    <p>
                      <p className="card-paragraph">
                        Interior <BsDot />
                        Aug 2022
                      </p>
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

            <div className="card">
              <div>
                <img src={commercial} alt="" />
              </div>

              <div className="card-content">
                <div className="card-text-div">
                  <h3>Interior Designs</h3>
                  <p className="card-paragraph">
                    Step Into A World Of Captivating Commercial Spaces Designed
                    To Elevate Your Business.
                  </p>
                </div>
                <div className="div-with-dot">
                  <div>
                    <p>
                      <p className="card-paragraph">
                        Interior <BsDot />
                        Aug 2022
                      </p>
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

            <div className="card">
              <div>
                <img src={structural} alt="" />
              </div>

              <div className="card-content">
                <div className="card-text-div">
                  <h3>Interior Designs</h3>
                  <p className="card-paragraph">
                    Step Into A World Of Captivating Commercial Spaces Designed
                    To Elevate Your Business.
                  </p>
                </div>
                <div className="div-with-dot">
                  <div>
                    <p>
                      <p className="card-paragraph">
                        Interior <BsDot />
                        Aug 2022
                      </p>
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
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Interior;
