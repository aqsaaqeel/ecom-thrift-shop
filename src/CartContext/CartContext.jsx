import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
const useCart = ()=> useContext(CartContext);

const CartProvider =({children})=>{
    function addToCartList(state,action){
        const {name,_id,price} = action.payload;
        let productInCart= false;
        let cartListOnAddition= state.cartlist.map(item=>{
            if(item._id===action.payload._id){
                productInCart=true;
                return {...item}
            }
            return item;
        })
        if(!productInCart){
            cartListOnAddition=[...state.cartlist,{name,_id,price}];
        }
       return cartListOnAddition;
    }
    
    const [state,dispatch]=useReducer((state,action)=>{
    switch (action.type){
        case "ADD_TO_CART":
            return {...state, cartItems : state.cartItems + 1, price: state.price+action.payload.price,
                totalPrice : Number(state.totalPrice) + Number(action.payload.price), cartlist: addToCartList(state,action)};
        case "REMOVE_FROM_CART":
            return {...state, cartItems : state.cartItems - 1, price: state.price-(action.payload.price),
                totalPrice : Number(state.totalPrice) - Number(action.payload.price), cartlist : state.cartlist.filter(item => item._id !== action.payload._id)}
        default :
            return state;
    }
},{cartItems : 0, price : 0, totalPrice: 0, cartlist : []})

return <CartContext.Provider value={{state,dispatch}}>
    {children}
</CartContext.Provider>
}
export { CartProvider, useCart };