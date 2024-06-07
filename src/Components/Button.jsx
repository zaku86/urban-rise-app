function Button({ text, isSecondary, largeBtn }) {
  return (
    <button
      className={`
        button 
        ${isSecondary ? "transparent-btn" : ""} 
        ${largeBtn ? "large-btn" : ""}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
