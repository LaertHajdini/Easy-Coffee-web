import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Title = styled.div`
    background: rgb(${palete.extra});
    height: 15vh;
    width: 100%;
    font: 3rem heebo;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    color: rgb(${palete.text});
    text-align: center;
    @media screen and (max-width: 961px) {
        width: 100%;
        height: auto;
    }
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Head = styled.div`
    color: rgb(${palete.text});
    font: 2rem heebo;
    font-weight: 800;
    text-align: center;
    padding: 2rem;
`

export const List = styled.ul`
    font: 1.5rem heebo;
    font-weight: 800;
    color: rgb(${palete.text});
    padding: 2rem;
    list-style: none;
`

export const ContactInfo = styled.li`
    text-align: center;
`

export const About = styled.div`
    font: 1.5rem heebo;
    color: rgb(${palete.text});
    padding: 2rem;
    text-align: center;
`

export const ContactBackground = styled.div`
    flex: 1;
    background: rgb(${palete.secondary});
`

export const AboutBackground = styled.div`
    flex: 1;
    background: rgb(${palete.primary});
`