import React from 'react'
import { useSelector } from 'react-redux'

import Resource from '../static/Resources'
import { Head, InerContainer } from '../styles/OrderStyles'
import OrderCard from './OrderCard'

export default function Order() {
    const data = useSelector(state => state.Order.data)
    return (
        <div id='order'>
            <Head>Order now</Head>
            <InerContainer>
                {data.map((order) => 
                    <OrderCard
                        key={order.name}
                        name={order.name}
                        price={order.price}
                        src={`${Resource.Api}/public/Orders/${order.image}`}
                    />
                )}
            </InerContainer>
        </div>
    )
}
