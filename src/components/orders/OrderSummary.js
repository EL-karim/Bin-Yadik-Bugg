import React from 'react'


const OrderSummary = ({order}) => {
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{order.title}</span>
            <p>Posted by Karim</p>
            <p className="grey-text">10/17/2019</p>
        </div>
    </div>
    )
}

export default OrderSummary