import React from "react";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
    backgroundImage: 'linear-gradient(to right, #FAB20A, #46566D, #299995)'
  };

  return (
    <div style={topBarStyle}>
      <span>{`😺️`}</span>
      Dylan Young
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;