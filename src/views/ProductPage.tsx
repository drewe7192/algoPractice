import React, { FC, useEffect, useState } from 'react'

import {
    RouteComponentProps,
    withRouter
  } from "react-router-dom";

import hourGlass from './../assets/hourGlass.svg'

interface ExpectedParams {
    id: string
}

interface IProductPageProps extends RouteComponentProps<ExpectedParams> {

}

const ProductPage:FC<IProductPageProps> = props => {

    const [id, setId] = useState<nullable<string>>(null)
    const [isLoading, setLoadingState] = useState<boolean>(true)

    useEffect(() => {

        setTimeout(() => {
            const _id = props && props.match && props.match.params && props.match.params.id || null
            if(_id) setId(_id)
            setLoadingState(false)
        }, 2000)

        return () => {
            console.log('cleaning up code here...')
        }

    }, [])

    const whileLoadingJSX = () => <div className="fullDim flex-item centered">
        <img className="animation-spinner" alt="loading" height="60" src={hourGlass}/>
    </div>

    const loadedContent = () => <div>
        <h1>Content Loaded</h1>
        <h1>Id: {id}</h1>
    </div>

    return isLoading ? whileLoadingJSX() : loadedContent()

}

// export default withRouter(ProductPage)
// export default ProductPage
export default withRouter(ProductPage)