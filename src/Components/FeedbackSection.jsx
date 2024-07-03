import Container from "./Container";
import HeaderParagraph from "./HeaderParagraph";
import FeedbackSlider from "./FeedbackSlider";

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
        <FeedbackSlider />
      </Container>
    </div>
  );
}

export default FeedbackSection;
