import React, { useState } from "react";

function HogTile({ name, specialty, greased, weight, image, medal }) {
  const [extraInfo, showExtraInfo] = useState("False");
  const [hideHog, hideTheHog] = useState("False")

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

  function handleHideHog() {
      hideTheHog(!hideHog)
  }

  if (!hideHog) {
      return <div></div>
  }
  return (
    <div className="ui eight wide column pigTile hoggyText">
      Name: {name}
      <br></br>
      <button classname="hideHog" onClick={handleHideHog}>Hide</button>
      <img src={image} width="100%" onClick={handleExtraInfo} />
    </div>
  );
}

export default HogTile;
