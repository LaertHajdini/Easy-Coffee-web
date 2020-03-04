import React from 'react'

import { Container, Image, Holder, Title, Description } from '../styles/ErrorStyles'

export default function ErrorCard(props) {
    return (
        <Container>
            <Image className="fas fa-exclamation-triangle"></Image>
            <Holder>
                <Title>{props.data.title}</Title>
                <Description>{props.data.description}</Description>
            </Holder>
        </Container>
    )
}
