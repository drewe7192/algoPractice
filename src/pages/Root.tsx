import React from 'react'

import github from './../assets/github.png'
import purpose from './../assets/purpose.png'
import scale from './../assets/scale.png'

interface ILinkDetails {
    target: '_blank' | '_self'
    href: string
    display: string
}

interface ICellParameter {
    imgSrc: string, 
    title: string
    link?: ILinkDetails
    description?: string
}

export default () => {

    const cellData: Array<ICellParameter> = [
        {
            title: 'Github',
            imgSrc: github,
            link: {
                target: '_blank',
                display: 'https://github.com/drewe7192/algoPractice',
                href: 'https://github.com/drewe7192/algoPractice'
            },
        },
        {
            title: 'Purpose',
            imgSrc: purpose,

            description: 'This repo is used to practice our skills in common datastructures and algorithms.'
        },
        {
            title: 'License',
            imgSrc: scale,
            link: {
                target: '_blank',
                display: 'MIT License',
                href: 'https://opensource.org/licenses/MIT'
            },
        }
    ]

    const CreateCell = (cellArguments: ICellParameter) => {
        const { imgSrc, title, description, link } = cellArguments
        let subDescription: string | null | JSX.Element = null
        if(description) {
            subDescription = description
        } else if(link){
            subDescription = <a className="noDecoration" target={link.target} href={link.href}>{link.display}</a>
        }

        return <div className="centered flex-item stretched vertical">
            <h1 className="centered flex-item title">
                <img height="80" src={imgSrc} alt="github image"/>
               <span>{title}</span>
            </h1>
            <div className="description">
                {subDescription}
            </div>
        </div>
    }

    return <div className="flex-item description-row">
        {cellData.map(CreateCell)}
    </div>
}