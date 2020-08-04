import React, { FC } from "react"
import { NavLink } from "react-router-dom"
// import house from "./../assets/Home.svg"
import house from "./../assets/cabin.png"

interface INavHeader {
  onHamburgerClick: VoidFunction
}

const NavigationHeader: FC<INavHeader> = (props: INavHeader) => {
  const { onHamburgerClick } = props

  // Responsible for making the little house on the top of the Header...
  const makeHouseNavLink = () => (
    <NavLink exact={true} className="flex-item houseLink" to="/" activeClassName="inHomePage">
      <img height="40" className="home" src={house} alt="home page" />
    </NavLink>
  );

  // Responsible for making the Hamburger with the 3 lines...
  const makeBurgerButton = () => (
    <div>
      <svg onClick={onHamburgerClick} className="hamBurgerLink" style={{ marginTop: "1vh" }} viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="10" rx="8"></rect>
        <rect y="30" width="100" height="10" rx="8"></rect>
        <rect y="60" width="100" height="10" rx="8"></rect>
      </svg>
    </div>
  )

  const makeBurger = (lineCount: number) => {
    let lines: Array<JSX.Element> = []
    for(let i = 0;i<lineCount;i++) lines.push(<div key={`hamLine-${i}`} className="line"></div>)
    return <div onClick={onHamburgerClick} className="burgerWrapper flex-item vertical">{lines}</div>
  }

  return (
    <div className="navigation">
      {/* makeBurgerButton() */}
      {makeBurger(3)}
      {makeHouseNavLink()}
    </div>
  );
};

export default NavigationHeader;
