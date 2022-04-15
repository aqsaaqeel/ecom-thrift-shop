import { createContext, useContext, useReducer } from "react";
const WishlistContext = createContext();
const useWishlist = ()=> useContext(WishlistContext);

const WishlistProvider =({children})=>{
    function addToWishlistList(state,action){
        const {name,_id,price,imagesrc} = action.payload;
        let productInWishlist= false;
        let wishlistListOnAddition= state.wishlistList.map(item=>{
            if(item._id===action.payload._id){
                productInWishlist=true;
                return {...item}
            }
            return item;
        })
        if(!productInWishlist){
            wishlistListOnAddition=[...state.wishlistList,{name,_id,price,imagesrc}];
        }
       return wishlistListOnAddition;
    }
    
    const [state,dispatchWishlist]=useReducer((state,action)=>{
    switch (action.type){
        case "ADD_TO_WISHLIST":
            return {...state, wishlistItems : state.wishlistItems + 1, wishlistList: addToWishlistList(state,action)};
        case "REMOVE_FROM_WISHLIST":
            return {...state, wishlistItems : state.wishlistItems - 1, wishlistList : state.wishlistList.filter(item => item._id !== action.payload._id)}
        default :
            return state;
    }
},{wishlistList : []})

return <WishlistContext.Provider value={{state,dispatchWishlist}}>
    {children}
</WishlistContext.Provider>
}
export { WishlistProvider, useWishlist };