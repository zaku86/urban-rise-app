function Line({ isDark }) {
  return <div className={`line ${isDark ? "line-dark" : ""}`}></div>;
}

export default Line;
