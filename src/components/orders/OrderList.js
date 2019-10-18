import React from 'react'
import OrderSummary from './OrderSummary'

const OrderList = ({orders}) => {
    return (
        <div className="project list section">
            { orders && orders.map(order => {
                return(
                    <OrderSummary order={order} key={order.id} />
                )
            
            })}
        </div>
    )
}

export default OrderList