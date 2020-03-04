import React from 'react'
import { useSelector } from 'react-redux'

import Card from './Card'
import Resource from '../static/Resources'
import { Container } from '../styles/AppStyles'
import { Footer as Head } from '../styles/HomeStyles'

export default function Order() {
    const data = useSelector(state => state.Plan.data)
    return (
        <div id='plans'>
        <Head>Or chose a monthly subscription</Head>
        <Container>
            {data.map((plan) => 
                <Card 
                    key={plan.name}
                    src={`${Resource.Api}/public/Plans/${plan.image}`}
                    title={plan.name}
                    price={plan.price}
                    page={plan.page}
                />
            )}
        </Container>
        </div>
    )
}
