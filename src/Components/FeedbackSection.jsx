import Button from "./Button";
import Container from "./Container";
import HeaderParagraph from "./HeaderParagraph";

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
      </Container>
    </div>
  );
}

export default FeedbackSection;
