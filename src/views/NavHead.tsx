import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import house from "./../assets/Home.svg";
import { AnyTxtRecord } from "dns";
import { CSSTransition } from "react-transition-group";

// interface INavHeaderProps {
//   onHamburgerClick: VoidFunction;
// }

export const DropDownMenu = () => {
  const [activeMenu, setactiveMenu] = useState("main");
  const DropDownItem = (props: any) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setactiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        className="menu-primary"
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon="fgda"
            rightIcon="fgda"
            goToMenu="settings"
          ></DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem leftIcon="fgda" goToMenu="main"></DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export const NavigationItem = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      // style={{ display: "inline-block", margin: "0 10px" }}
      className="nav-item"
    >
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

// const NavigationHeader: FC<INavHeaderProps> = (props: INavHeaderProps) => {
const NavigationHeader = (props: any) => {
  // const { onHamburgerClick } = props;

  // const makeHouseNavLink = () => (
  //   <div className="svg">
  //     <NavLink exact={true} className="flex-item svg" to="/">
  //       <img height="40" className="home svg" src={house} alt="home page" />
  //     </NavLink>
  //   </div>
  // );

  // const makeBurgerButton = () => (
  //   <div>
  //     <svg
  //       onClick={onHamburgerClick}
  //       className="hamBurgerLink"
  //       style={{ marginTop: "1vh" }}
  //       viewBox="0 0 100 80"
  //       width="40"
  //       height="40"
  //     >
  //       <rect width="100" height="10" rx="8"></rect>
  //       <rect y="30" width="100" height="10" rx="8"></rect>
  //       <rect y="60" width="100" height="10" rx="8"></rect>
  //     </svg>
  //   </div>
  // );

  return (
    <div>
      <nav className="navigation">
        <ul className="navigation-nav">{props.children}</ul>
        {/* {makeBurgerButton()}
        {makeHouseNavLink()} */}
      </nav>
      {/* <hr className="blueLine" /> */}
    </div>
  );
};

export default NavigationHeader;
