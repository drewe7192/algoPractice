import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import house from "./../assets/Home.svg";
import { AnyTxtRecord } from "dns";
import { CSSTransition } from "react-transition-group";
import Home from "../assets/Home.svg";
import arrow from "../assets/arrow2.svg";
import home from "../assets/Home.svg";

// interface INavHeaderProps {
//   onHamburgerClick: VoidFunction;
// }

export const DropDownMenu = () => {
  const [activeMenu, setactiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState();

  const calcHeight = (el: any) => {
    const height = el.ofsetHeight;
    setMenuHeight(height);
  };
  const DropDownItem = (props: any) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setactiveMenu(props.goToMenu)}
      >
        <span className="icon-button">
          {" "}
          <img className="img-wrapper" src={props.leftIcon} />
        </span>
        {props.children}
        <span className="icon-right">
          {" "}
          <img className="img-wrapper" src={props.rightIcon} />
        </span>
      </a>
    );
  };
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {" "}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem>First Page</DropDownItem>
          <DropDownItem goToMenu="settings">Settings</DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownItem leftIcon={arrow} goToMenu="main" />
          <Link to="/Level1/Searching/linearSearch">
            <DropDownItem>Second Page</DropDownItem>
          </Link>

          <DropDownItem>Second Page</DropDownItem>
          <DropDownItem>Second Page</DropDownItem>
          <DropDownItem>Second Page</DropDownItem>
          <DropDownItem>Second Page</DropDownItem>
          <DropDownItem>Second Page</DropDownItem>
          <DropDownItem>Second Page</DropDownItem>
          <DropDownItem>Second Page</DropDownItem>
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
        <img className="img-wrapper" src={props.icon} />
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
