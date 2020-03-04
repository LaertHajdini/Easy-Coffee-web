import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: rgb(${palete.secondary});
`

export const Logo = styled.img`
    height: 85vh;
    @media (max-width: 961px) {
        width: 100%;
        height: auto;
    }
`

export const InerContainer = styled.div`
    flex: 1;
    font: 5rem heebo;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 3rem;
    color: rgba(${palete.text}, .9);
`

export const Footer = styled.div`
    background: rgb(${palete.light});
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