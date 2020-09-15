import React, { FC } from 'react'
import { RouteComponentProps, withRouter } from "react-router-dom";

type ProductsDetailParams = {
    id: string; // parameters will always be a string (even if they are numerical)
}

interface IProducePageProps extends RouteComponentProps<ProductsDetailParams> {
}

const ProducePage = (props: IProducePageProps) => {
    let id = '????'
    if(props && props.match && props.match && props.match.params && props.match.params.id) {
        id = props.match.params.id
    }
    return <h2>This is a page for product with ID: {id}</h2>;
}

export default withRouter(ProducePage)