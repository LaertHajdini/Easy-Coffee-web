import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Wraper, DropButton, RetractButton } from '../styles/ErrorStyles'
import ErrorCard from './ErrorCard'

export default function Error(props) {
    const [open, setOpen] = useState(false)
    const errorList = useSelector(state => state.Error)
    const [active, setActive] = useState(false)
    useEffect(() => {
        errorList.length > 0 ? setActive(true) : setActive(false)
    }, [errorList])
    if (active) {
        if (open) {
            return (
                <Wraper>
                    {
                        errorList.map((error, index) => <ErrorCard key={index} data={error} />)
                    }
                    <RetractButton onClick={() => setOpen(false)}><i className="fas fa-angle-up"></i></RetractButton>
                </Wraper>
            )
        } else {
            return <DropButton onClick={() => setOpen(true)}><i className="fas fa-angle-down"></i></DropButton>
        }
    } else {
        return null
    }
}