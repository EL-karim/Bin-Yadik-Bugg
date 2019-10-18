export const createOrder = (order) => {
    return (dispatch, getstate, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('orders').add({
            ...order,
            authoFirstName: 'Karim',
            authorLastName: 'Lothar',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ORDER', order });
        }).catch((err) => {
            dispatch({ type: 'CREATE_ORDER_ERROR', err});
        })
        
    }
};