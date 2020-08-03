import React, { FC, ReactNode } from 'react'
import { Link } from "react-router-dom"
import { routingGroup } from './routesData'

interface ITilesProps {
    tileData: Array<ITileData<routingGroup>>
}

export const Tiles: FC<ITilesProps> = (props: ITilesProps) => {

    const { tileData } = props

    const imgMouseHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, newSrc: string) => {
        (e.target as HTMLImageElement).src = newSrc
    }


    const renderTiles = ():ReactNode => {

        if(!Array.isArray(tileData)) return null
        return tileData.filter(tileData => tileData.isShowing).map(t => {
                const { title, imgSrc, gifSrc, to } = t
                return <Link to={to} className="HomePageTile" key={title}>
                    <div>

                        <div className="img-wrapper noOverflow">
                            <img onMouseOver={(e) => imgMouseHandler(e, gifSrc)} onMouseOut={(e) => imgMouseHandler(e, imgSrc)} src={imgSrc} alt=""/>
                        </div>

                        <h4>{title}</h4>
                    </div>
                </Link>
        })
    }
    
    return <div className="flex-item description-row fullDim wrapped auto-overflow">
        {renderTiles()}
    </div>

}