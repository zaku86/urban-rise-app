function Button({ text, isSecondary, largeBtn, textSecondary, Icon }) {
  return (
    <button
      className={`
        button 
        ${isSecondary ? "transparent-btn" : ""} 
        ${largeBtn ? "large-btn" : ""}
        ${textSecondary ? "btn-text-color" : ""}
      `}
    >
      {text}
      {Icon}
    </button>
  );
}

export default Button;
