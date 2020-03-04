import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Wraper = styled.div`
    position: fixed;
    width: 50%;
    background: rgb(${palete.text});
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 4;
    padding: 2rem;
    max-height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar { 
        display: none;
    }
`

export const Container = styled.div`
    border: solid 2px rgb(${palete.light});
    display: flex;
    flex-wrap: wrap;
    font-family: heebo;
    color: rgb(${palete.primary});
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
`

export const Image = styled.i`
    font-size: 4rem;
    color: rgb(${palete.light});
    margin: 10px;
    `

export const Holder = styled.div`
    flex: 1;
    margin: 10px;
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
`

export const Description = styled.div`
`

export const DropButton = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    font-size: 3rem;
    color: rgb(${palete.light});
    background: rgb(${palete.text});
    padding: .2rem 2rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
        color: rgb(${palete.primary});
    }
`

export const RetractButton = styled.div`
    z-index: 4;
    font-size: 3rem;
    color: rgb(${palete.light});
    background: rgb(${palete.text});
    padding: .2rem;
    text-align: center;
    margin-bottom: -20px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
        color: rgb(${palete.primary});
    }
`