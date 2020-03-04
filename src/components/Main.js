import React,{ useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { UpdateOrder } from '../redux/actions/Order'
import { UpdatePlan } from '../redux/actions/Plan'
import Resource from '../static/Resources'
import Menu from './Menu'
import Home from './Home'
import Order from './Order'
import Plans from './Plans'
import Info from './Info'
import Error from './Error'

export default function Main() {
    const [updateOrder, setUpdateOrder] = useState(false)
    const [updatePlan, setUpdatePlan] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`${Resource.Api}/order`).then((response) => {
            dispatch(UpdateOrder(response.data))
            setUpdateOrder(true)
        })
        axios.get(`${Resource.Api}/plans`).then((response) => {
            dispatch(UpdatePlan(response.data))
            setUpdatePlan(true)
        })
    },[dispatch])
    return (updatePlan && updateOrder  ? 
        <>
            <Error />
            <Menu />
            <Home />
            <Order />
            <Plans />
            <Info />
        </> : 
        <>
            <Error />
            <Menu />
            <Home />
            <Info />
        </>
    )
}
