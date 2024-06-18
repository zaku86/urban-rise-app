import Button from "./Button";
import { FaGreaterThan } from "react-icons/fa6";
import Line from "./Line";

function HeaderParagraph({ title, description, isLightMode }) {
  return (
    <div>
      <Line />
      <div className={`title-div`}>
        <div>
          <h1
            style={{ color: isLightMode ? "white" : "black" }}
            className="section-title"
          >
            {title}
          </h1>
          <p className="body-text">{description} </p>
        </div>
        <div>
          <Button
            text={"See All"}
            Icon={<FaGreaterThan />}
            isSecondary
            textSecondary={!isLightMode}
            whiteBorder={isLightMode}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderParagraph;
