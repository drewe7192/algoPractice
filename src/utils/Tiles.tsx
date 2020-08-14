import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import RoutingData from "../routes/routesInstance";

interface ITilesProps {}

export const Tiles: FC<ITilesProps> = (props: ITilesProps) => {
  const imgMouseHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    newSrc: string
  ) => {
    (e.target as HTMLImageElement).src = newSrc;
  };

  const renderTiles = (): ReactNode => {
    const _tileData = RoutingData.getTileData();
    if (
      !Array.isArray(_tileData) ||
      (Array.isArray(_tileData) && _tileData.length === 0)
    )
      return null;

    return _tileData.map((t: ITileRoutingAttributes) => {
      const { title, imgSrc, gifSrc, to } = t;
      return (
        <Link to={to} className="HomePageTile" key={title}>
          <div
            style={{
              borderStyle: "solid",
              borderColor: "cadetBlue",
              borderRadius: "15px",
            }}
          >
            <div className="img-wrapper noOverflow">
              {/* <img
                onMouseOver={(e) => imgMouseHandler(e, gifSrc)}
                onMouseOut={(e) => imgMouseHandler(e, imgSrc)}
                src={imgSrc}
                alt=""
              /> */}
              <div style={{ height: "40vh", width: "20vw" }}></div>
            </div>
            <div style={{ textAlign: "center", color: "cadetBlue" }}>
              <h4>{title}</h4>
            </div>
          </div>
        </Link>
      );
    });
  };

  return <>{renderTiles()}</>;
};
