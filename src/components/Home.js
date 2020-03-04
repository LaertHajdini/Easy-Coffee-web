import React from 'react'
import { Container, Logo, InerContainer, Footer } from '../styles/HomeStyles'
import Resource from '../static/Resources'

export default function Home() {
    return (
        <div id='home'>
            <Container>
                    <Logo src={`${Resource.Api}/public/Logo/big.png`} />
                    <InerContainer>
                        Simple,<br />
                        Easy,<br />
                        Practic
                    </InerContainer>
            </Container>
            <Footer>What you want where you want it.</Footer>
        </div>
    )
}
