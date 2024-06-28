import Container from "./Container";
import user from "../assets/user.jpg";

const data = [
  {
    img: user,
    name: "Ethan Walker",
    occupation: "Civil Engineer",
  },
  { img: user, name: "Ava Mitchell", occupation: "Project Engineer" },
  { img: user, name: "Jackson Thompson", occupation: "Senior Civil Engineer" },
  { img: user, name: "Williams carie", occupation: "Materials Engineer" },
  { img: user, name: "Benjamin Carter", occupation: "Project Engineer" },
  { img: user, name: "Sophia Robinson", occupation: "Surveyor" },
];

function TeamCard() {
  return (
    <div>
      <Container>
        <div className="team-container">
          <div className="user-container">
            {data.map((el, index) => {
              return (
                <div key={index} className="user">
                  <div className="img-container2">
                    <img className="lady" src={user} />
                  </div>
                  <div className="user-name">
                    <h2>{el.name}</h2>
                    <p className="name-description">{el.occupation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TeamCard;
