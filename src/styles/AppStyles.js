import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 6vh;
    background: rgb(${palete.primary});
`

export const CardBackground = styled.div`
    background: rgb(${palete.text});
    height: 420px;
    width: 280px;
    margin: 5vh;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 10px 50px;
    transition: .3s;
    cursor: pointer;
    ${props => props.open ? 'transform: translateY(-5%) scale(1.1) rotateY(180deg);' : ''}
`

export const Image = styled.img`
    height: 60%;
    width: 100%;
    object-fit: cover;
`

export const BasicInfo = styled.div`
    height: 40%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const BasicInfoBack = styled.div`
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
`

export const Title = styled.div`
    font-size: 2em;
    margin: 10px;
    grid-column: 1/3;
    text-align: center;
    font-family: myriad-pro, sans-serif;
    font-weight: 700;
    color: rgb(${palete.secondary});
`

export const Price = styled.div`
    font-size: 1.2em;
    text-align: center;
    grid-column: 2/3;
    color: rgb(${palete.extra});
`

export const BackHeader = styled.div`
    position: relative;
    font-size: 1.2rem;
    background: rgb(${palete.light});
    color: rgb(${palete.text});
    text-align: center;
    padding: 1rem;
`

export const Details = styled.ul`
    padding: 3rem;
`

export const Element = styled.li`
    color: rgb(${palete.primary});
    gap: .3rem;

`

export const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: rgb(${palete.extra});
    color: rgb(${palete.text});
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
`