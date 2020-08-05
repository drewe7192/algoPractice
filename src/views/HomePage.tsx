import React from "react";
import { Tiles } from "./../routes/Tiles";
import { RoutesInfo } from "./../routes/routesData";
import Logo from "./../assets/purpose.png";

export default () => (
  <div className="auto-overflow flex-item fullDim vertical" id="homePage">
    <span className="flex-item centered homeTitle">
      <span>
        <img height="60" src={Logo} alt="logo" />
      </span>
      <h1 className="lobsterText">Algo Practice</h1>
    </span>
    <h5 className="flex-item centered" style={{ fontStyle: "italic" }}>
      A place to pratice algos and stuff(this subdescription is pending)
    </h5>
    <div className="description-row flex-item stretched">
      <Tiles tileData={RoutesInfo} />
    </div>
  </div>
);
