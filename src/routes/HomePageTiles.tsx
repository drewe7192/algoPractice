import React, { FC, ReactNode } from 'react'
import { Link } from "react-router-dom"

export interface ITileData {
    title: string
    isShowing: boolean
    imgSrc: string
    gifSrc: string
    to: string
}

interface ITilesProps {
    tileData: Array<ITileData>
}

export const HomePageTiles: FC<ITilesProps> = (props: ITilesProps) => {

    const { tileData } = props

    const renderTiles = ():ReactNode => {

        if(!Array.isArray(tileData)) return null
        return tileData.filter(tileData => tileData.isShowing).map(t => {
                const { title, imgSrc, to } = t
                return <Link to={to} className="HomePageTile" key={title}>
                    <div>
                        <div className="img-wrapper noOverflow">
                            <img src={imgSrc} alt=""/>
                        </div>
                        <h4>{title}</h4>
                    </div>
                </Link>
        })
    }
    
    return <>{renderTiles()}</>

}