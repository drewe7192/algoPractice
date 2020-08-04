import React, { FC } from "react"
import { Groupings, RoutesInfo } from "./../routes/routesData"
import { NavLink } from "react-router-dom"

interface IHamburgerSliderprops {
  onHamburgerClick: VoidFunction
  menuIsShown: boolean
}

const HamburgerSlider: FC<IHamburgerSliderprops> = (props: IHamburgerSliderprops) => {

  const { onHamburgerClick, menuIsShown } = props;

  const buildHamMenuList = (): Array<JSX.Element> | null => {

    if (!Array.isArray(Groupings) || Groupings.length === 0) return null

    return Groupings.map((groupingObject) => {

      const { group, groupName } = groupingObject

      const options = RoutesInfo.filter((r) => r.group === group).map((gr) => {
        const { title, to } = gr
        return (<NavLink key={title} onClick={onHamburgerClick} activeClassName="selected" to={to} className="noDecoration"><span>{title}</span></NavLink>)
      })

      return <div key={groupName}><h1>{groupName}</h1>{options}</div>

    })
  }


  let className = "flex-item subNavigation_area"
  let _className = "auto-overflow display fullDim"

  if (menuIsShown) className += " display" 
  else _className = "noDisplay"

  return <div className={className}>
    <div className="selection-zone stretched">
      <div className={_className}>{buildHamMenuList()}</div>
    </div>
    <div className="shadow-zone clickArea" onClick={onHamburgerClick}></div>
  </div>

}

export default HamburgerSlider;
