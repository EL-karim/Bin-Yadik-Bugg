const iniState = {
    orders: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
    ]
}

const OrderReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE_ORDER':
            console.log('created order', action.order);
            return state;
        case 'CREATE_ORDER_ERROR':
            console.log('create order error', action.err);
            return state;
        default:
            return state;
    }
}

export default OrderReducer