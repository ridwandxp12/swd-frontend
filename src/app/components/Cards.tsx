import { Card } from 'antd'
import React from 'react'

type CardsProps = {
    title: string,
    desc: string,
    click: () => void
}
const Cards = ({ title, desc, click }: CardsProps) => {

    return (
        <Card title={title} style={{ width: 300 }} onClick={click} className='cursor'>
            <p>{desc}</p>
        </Card>
    )
}

export default Cards