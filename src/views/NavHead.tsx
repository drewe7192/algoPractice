import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import house from "./../assets/Home.svg";

interface INavHeaderProps {
  onHamburgerClick: VoidFunction;
}

/**
 * this is the blue bar placed on top of all pages
 * @param props in shape of INavHeader
 */
const NavigationHeader: FC<INavHeaderProps> = (props: INavHeaderProps) => {
  const { onHamburgerClick } = props;

  /**
   * Responsible for making the little house on the top of the Header.
   */
  const makeHouseNavLink = () => (
    <div className="svg">
      <NavLink exact={true} className="flex-item svg" to="/">
        <img height="40" className="home svg" src={house} alt="home page" />
      </NavLink>
    </div>
  );

  /**
   * Responsible for making the Hamburger with the 3 lines...
   */
  const makeBurgerButton = () => (
    <div>
      <svg
        onClick={onHamburgerClick}
        className="hamBurgerLink"
        style={{ marginTop: "1vh" }}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="10" rx="8"></rect>
        <rect y="30" width="100" height="10" rx="8"></rect>
        <rect y="60" width="100" height="10" rx="8"></rect>
      </svg>
    </div>
  );

  return (
    <div>
      <div className="navigation">
        {makeBurgerButton()}
        {makeHouseNavLink()}
      </div>
      <hr className="blueLine" />
    </div>
  );
};

export default NavigationHeader;
