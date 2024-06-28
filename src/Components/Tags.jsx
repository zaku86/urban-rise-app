import { useState } from "react";
import { IoConstructOutline } from "react-icons/io5";

const data = [
  "Civil Engineers",
  "Architect",
  "Structural Engineer",
  " Interior Designer",
  "Project Manager",
];

function Tags() {
  const [selectedTask, setSelectedTask] = useState("");

  const handleSetTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="badges-container">
      {data.map((el, index) => {
        return (
          <div
            onClick={() => handleSetTask(el)}
            key={index}
            className={`badges ${selectedTask === el ? "selectedBadge" : ""}`}
          >
            <p className="name-description">{el}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tags;
