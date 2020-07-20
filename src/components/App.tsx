import React, { FC } from 'react'
import { Program } from './../programLogic'

interface IAppProps {
    userName: string;
    lang: string;
}

export const App:FC<IAppProps> = (props: IAppProps) => {
    const { lang, userName } = props
    const _codeRef = Program.getAppInstance()

    return <div>
        <h1>Click a button <br/> and Check your Console</h1>
        <div className="flex-item">
            <div className="button" onClick={_codeRef.mergeSortCode}>Merge Sort Code</div>
            <div className="button" onClick={_codeRef.SLLCode}>SLL Code</div>
        </div>

    </div>

}