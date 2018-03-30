export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_CART = 'UPDATE_TO_CART';
export const DELETE_FROM_CART = 'DELETE_TO_CART';

export function  addCart (product, quantity, unitCost) {
    return {
        type:'ADD_TO_CART',
        payload:{ product, quantity, unitCost }
    }
}   

export function deleteCart (product) {
    return {
        type:'DELETE_TO_CART',
        payload:{product}
    }
}

export function updateCart (product,quantity,unitCost) {
    return {
        type:'UPDATE_TO_CART',
        payload:{
            product,
            quantity,
            unitCost
        }
    }
}