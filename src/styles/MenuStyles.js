import styled from 'styled-components'
import palete from '../static/ColorPalete'

export const Background = styled.div`
    position: fixed;
    width: 100%;
    background: rgb(${palete.text});
    color: rgb(${palete.extra});
    z-index: 2;
    transition: .3s;
    transform-origin: top;
    transform: rotateX(${props => props.open ? '0deg' : '90deg'});
    &:hover {
        transform: rotateX(0deg);
    }
`

export const Panel = styled.div`
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: center;
    font: 1.5rem heebo, sans-serif;
    font-weight: 400;
    & > * {
        cursor: pointer;
        padding: .6em;
        text-align: center;
        width: 200px;
        position: relative;
        transition: .3s ease;
        &:hover {
            background: rgb(${palete.secondary});
            color: rgb(${palete.text});
            &::after {
                background: rgb(${palete.primary});
            }
        }
    }
`

export const UserButton = styled.li`
    cursor: pointer;
    padding: .6em;
    text-align: center;
    width: 200px;
    position: relative;
    transition: .3s ease;
    &:hover {
        background: rgb(${palete.secondary});
        color: rgb(${palete.text});
    }
`