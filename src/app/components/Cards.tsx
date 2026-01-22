import { Card } from 'antd'
import React from 'react'

type CardsProps = {
    title: string,
    desc: string
}
const Cards = ({ title, desc }: CardsProps) => {

    return (
        <Card title={title} style={{ width: 300, margin: 10 }} >
            <p>{desc}</p>
        </Card>
    )
}

export default Cards