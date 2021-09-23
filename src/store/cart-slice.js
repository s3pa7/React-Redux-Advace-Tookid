
import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";


const cartSlice = createSlice({
    'name':'cart',
    initialState: {
        items: [

        ],
        totalQuantity:0,
        changed: false,

    },
    reducers:{
        replaceCart(state,action){
          state.totalQuantity = action.payload.totalQuantity;
          state.items = action.payload.items;
        },
        addItemToCart(state, action){
            const newItem = action.payload;
            debugger;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    name:newItem.title
                });
            }else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItems = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if(existingItems.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else  {
                existingItems.quantity--;
                existingItems.totalPrice = existingItems.totalPrice - existingItems.price;
            }
        },
    }
})


/*const sendCartData = (cart) => {
    return  async  (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status:'pending',
                title:'Sending',
                message:'Sending cart data!'

            })
        );
        const response = await fetch(
            'https//:',{
                method:'PUT',
                body:JSON.stringify(cart),
            }
        )
        if(!response.ok){
            throw  new Error('Sending cart data failed');
        }
        dispatch(
            uiActions.showNotification({
                status:'success',
                title:'Success',
                message:'Sending cart data successfuly!'

            }))

    }
}*/

export const cartActions = cartSlice.actions;
export default cartSlice;
