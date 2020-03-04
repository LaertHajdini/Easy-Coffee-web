import React, { useState, useEffect } from 'react'

import { Wraper, InputBox, InputLabel } from '../styles/UserStyles'

const handleBlur = (setActive, get, onFocus) => {
    if (onFocus) {
        setActive(true)
    } else {
        if (get === '') {
            setActive(false)
        } else {
            setActive(true)
        }
    }
}

export default function Input(props) {
    const [active, setActive] = useState(false)
    const [onFocus, setOnFocus] = useState(false)
    useEffect(() => {
        handleBlur(setActive, props.get, onFocus)
    }, [props.get, onFocus])
    return (
        <Wraper onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)}>
            <InputBox name={props.name} type={props.type} onChange={(event) => props.set(event.target.value)} value={props.get} />
            <InputLabel active={active} htmlFor={props.name}>{props.placeholder}</InputLabel>
        </Wraper>
    )
}
