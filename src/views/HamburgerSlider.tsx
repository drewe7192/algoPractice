import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import RoutingData from "../routes/routesInstance";

interface IHamburgerSliderprops {
  onHamburgerClick: VoidFunction;
  menuIsShown: boolean;
}

/**
 * Hamburger Sliding Menu on the left
 * @param props are in shape of IHamburgerSliderprops...
 */
const HamburgerSlider: FC<IHamburgerSliderprops> = (
  props: IHamburgerSliderprops
) => {
  const { onHamburgerClick, menuIsShown } = props;

  const buildHamburgerMenu = (): Array<JSX.Element> => {
    return RoutingData.getRouteParents().map((P) => {
      const { name, children } = P;
      const subOptions = children.map((c) => {
        const { title, to } = c;
        return (
          <NavLink
            key={title}
            onClick={onHamburgerClick}
            activeClassName="selected"
            to={to}
            className="noDecoration"
          >
            <span>{title}</span>
          </NavLink>
        );
      });
      return (
        <div key={name}>
          <h1>{name}</h1>
          {subOptions}
        </div>
      );
    });
  };

  const getSubNav = () => {
    let className = "flex-item subNavigation_area";
    let _className = "display";

    if (menuIsShown) className += " display";
    else _className = "noDisplay";

    return (
      <div className={className}>
        <div className="selection-zone stretched">
          <div className={_className}>{buildHamburgerMenu()}</div>
        </div>
        <div className="shadow-zone clickArea" onClick={onHamburgerClick}></div>
      </div>
    );
  };

  return getSubNav();
};

export default HamburgerSlider;
