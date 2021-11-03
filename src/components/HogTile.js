import React, { useState } from "react";

function HogTile({ name, specialty, greased, weight, image, medal }) {
  const [extraInfo, showExtraInfo] = useState("False");

  function handleExtraInfo() {
    showExtraInfo(!extraInfo);
  }

  if (!extraInfo) {
    return (
      <div className="ui eight wide column pigTile" onClick={handleExtraInfo}>
        <ul className="infoText">
          <li>Specialty: {specialty}</li>
          <li>Weight: {weight}</li>
          <li>Greased: {greased ? "Yes" : "No"}</li>
          <li>
            Highest Medal Achieved:{" "}
            <span className="achievementText">{medal}</span>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div
      className="ui eight wide column pigTile hoggyText"
      onClick={handleExtraInfo}
    >
      Name: {name}
      <img src={image} width="100%" />
    </div>
  );
}

export default HogTile;
