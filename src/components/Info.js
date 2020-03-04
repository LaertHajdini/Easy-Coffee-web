import React from 'react'

import { Title, Container, Head, List, ContactInfo, About, ContactBackground, AboutBackground } from '../styles/InfoStyles'

export default function Contact() {
    return (
        <div id='info'>
        <Title>Information</Title>
        <Container>
            <ContactBackground>
                <Head>Contact</Head>
                <List>
                    <ContactInfo><i className='fab fa-instagram'></i>@easycoffee</ContactInfo>
                    <ContactInfo><i className='fab fa-facebook'></i>Easy Coffee</ContactInfo>
                    <ContactInfo><i className='fas fa-at'></i>contact@easycoffe.com</ContactInfo>
                    <ContactInfo><i className='fas fa-mobile-alt'>+355 86 12 200</i></ContactInfo>
                </List>
            </ContactBackground>
            <AboutBackground>
                <Head>About</Head>
                <About>
                    We are a small shop with a big dream.<br />
                    Join us and see how you can make<br />
                    your life easier.
                </About>
            </AboutBackground>
        </Container>
        </div>
    )
}
