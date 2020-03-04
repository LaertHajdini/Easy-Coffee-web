import React, { useState } from 'react'

import { Card, Image, Name, Price, Footer } from '../styles/OrderStyles'

export default function Orders(props) {
    const [open, setOpen] = useState(false)
    return (
        <Card 
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Image src={props.src} />
                <Name>{props.name}</Name>
                <Price>Only {props.price}</Price>
                <Footer open={open}>Order Now</Footer>
        </Card>
    )
}
