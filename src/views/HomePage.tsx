import React, { FC } from 'react'
import { Tiles } from './../routes/Tiles'
import { RoutesInfo } from './../routes/routesData'
import Logo from './../assets/purpose.png'
import './../css/views/homePage.css'

interface IAppIntroProps {
  appName: string
  header: string
}

// NOT EXPORTING THIS COMPONENT BECAUSE IT IS ONLY A PART OF HOMEPAGE...
// GETS USED IN DEFAULT EXPORT
const AppIntro:FC<IAppIntroProps> = (props: IAppIntroProps) => 
{
  const { header, appName } = props
  return <div className="AppIntro centered flex-item">
    <span className="centered flex-item vertical">
      <div className="flex-item">
        <span>
          <img height="60" src={Logo} alt="logo" />
        </span>
        <h1 className="lobsterText">{appName}</h1>
      </div>
      <h5 className="flex-item centered" style={{ fontStyle: "italic" }}>{header}</h5>  
    </span>

  </div>
}



export default () => (

  <div className="auto-overflow flex-item fullDim vertical" id="homePage">

    <AppIntro header="A place to pratice algos and stuff(this subdescription is pending)" appName="Algo Practice"/>

    <div className="description-row flex-item stretched wrapped">
      <Tiles tileData={RoutesInfo} />
    </div>
  </div>
);
