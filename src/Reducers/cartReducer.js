// CartReducer
function cartReducer(state,action){
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, count: state.count + 1}
        case 'REMOVE_FROM_CART':
            return {...state,count : state.count - 1 }
        default:
            return state
    }
}

export {cartReducer}