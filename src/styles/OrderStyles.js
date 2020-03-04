import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Head = styled.div`
    background: rgb(${palete.primary});
    height: 15vh;
    width: 100%;
    font: 3rem heebo;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    color: rgba(${palete.text}, .9);
    text-align: center;
    @media screen and (max-width: 961px) {
        width: 100%;
        height: auto;
    }
`

export const InerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: rgb(${palete.secondary});
    padding: 6vh;
`

export const Card = styled.div`
    position: relative;
    background: rgb(${palete.text});
    height: 420px;
    width: 280px;
    margin: 5vh;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 10px 50px;
    transition: .3s;
    cursor: pointer;
    &:hover {
        transform: translateY(-5%) scale(1.1);
    }
    @media screen and (max-width: 961px) {
        margin: 5vh 0;
    }
`

export const Image = styled.img`
    height: 60%;
    width: 100%;
    object-fit: cover;
`

export const Name = styled.div`
    font-size: 2em;
    margin: 10px;
    text-align: center;
    font-family: myriad-pro, sans-serif;
    font-weight: 700;
    color: rgb(${palete.secondary});
`

export const Price = styled.div`
    font-size: 1.2em;
    font-family: myriad-pro, sans-serif;
    font-weight: 700;
    text-align: center;
    color: rgb(${palete.extra});
`

export const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: rgb(${props => props.open ? palete.extra : palete.primary});
    color: rgb(${palete.text});
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
    border: solid 5px;
    border-radius: 20px;
    transition: .3s;
`