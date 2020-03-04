import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Background = styled.div`
    background: rgba(${palete.primary}, .85);
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const Close = styled.div`
    position: absolute;
    color: rgb(${palete.text});
    font-size: 3rem;
    top: 0;
    right: 20px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        transform: scale(1.2);
    }
`

export const Container = styled.div`
    background: rgb(${palete.text});
    display: flex;
    flex-direction: column;
    padding: 2rem;
    transition: .3s ease;
    transform: ${props => props.fliped ? 'rotateY(180deg) scaleX(-1)' : 'rotateY(0deg)'};
`

export const ButtonWraper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 30px 30px 10px 30px;
`

export const Button = styled.button`
    width: 30%;
    flex: 1;
    font: 2rem heebo;
    border: solid 2px rgb(${palete.extra});
    transition: .3s ease;
    background: rgb(${props => props.selected === props.name ? palete.extra : palete.text});
    color: rgb(${props => props.selected === props.name ? palete.text : palete.extra});
    padding: 10px;
    cursor: pointer;
    &:hover {
        background: rgb(${palete.text});
        color: rgb(${palete.extra});
    }
`

export const Wraper = styled.div`
    font: 2rem heebo;
    position: relative;
    margin: 30px;
`

export const InputBox = styled.input`
    font: inherit;
    background: rgb(${palete.text});
    color: rgb(${palete.primary});
    border: solid 2px rgb(${palete.extra});
    padding: 10px;
    outline-color: rgb(${palete.extra});
`

export const InputLabel = styled.label`
    position: absolute;
    color: rgb(${props => props.active ? palete.extra : palete.primary});
    background: ${props => props.active ? `rgb(${palete.text})` : 'transparent'};
    left: 5px;
    padding: ${props => props.active ? '0px 4px' : '10px'};
    transition: .3s ease;
    top: ${props => props.active ? '-30px' : '0px'};
    transform: scale(${props => props.active ? .75 : 1});
    pointer-events: none;
`