import React, { useState } from 'react'
import { CardBackground, Image, BasicInfo, BasicInfoBack, Title, Price, BackHeader, Details, Element, Footer } from '../styles/AppStyles'

export default function Card(props) {
    const [open, setOpen] = useState(false)
    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <CardBackground open={open}>
            {
            !open ? (
                <>
                <Image src={props.src}/>
                <BasicInfo>
                    <Title>{props.title}</Title>
                    <Price>{props.price}</Price>
                    
                </BasicInfo>
                </>
            ) : (
                <>
                <BasicInfoBack>
                    <BackHeader>This subscription contains the following</BackHeader>
                    <Details>
                        {
                            props.page.map((item, index) => <Element key={index}>{item}</Element>)
                        }
                    </Details>
                    <Footer>For more info contact us</Footer>
                </BasicInfoBack>
                </>
            )}
        </CardBackground>
        </div>
    )
}
