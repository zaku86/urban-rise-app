function Button({
  text,
  isSecondary,
  largeBtn,
  textSecondary,
  Icon,
  whiteBorder,
}) {
  return (
    <button
      className={`
        button 
        
        ${isSecondary ? "transparent-btn" : ""} 
        ${largeBtn ? "large-btn" : ""}
        ${textSecondary ? "btn-text-color" : ""}
        ${whiteBorder ? "white-border" : ""}
        
      `}
    >
      {text}
      {Icon}
    </button>
  );
}

export default Button;
