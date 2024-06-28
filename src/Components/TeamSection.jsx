import Container from "./Container";
import HeaderParagraph from "./HeaderParagraph";
import Tags from "./Tags";
import TeamCard from "./TeamCard";

function TeamSection() {
  return (
    <div className="padding-class">
      <Container>
        <HeaderParagraph
          title={"Team Members"}
          description={"Meet the Collaborative Minds of Our Construction Team"}
        />
        <Tags />
        <TeamCard />
      </Container>
    </div>
  );
}

export default TeamSection;
