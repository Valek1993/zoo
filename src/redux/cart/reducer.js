import {createSlice} from "@reduxjs/toolkit";


const getCartFromLS = () => {
    const data = localStorage.getItem('basket')
    return data ? JSON.parse(data) : []
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            itemsInCart: getCartFromLS()
        },
        reducers: {
            setItemInCart: (state, action) => {
                state.itemsInCart.push(action.payload)
            },
            deleteItemFromCart: (state, action) => {
                state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
            }
        }
    }
);

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
