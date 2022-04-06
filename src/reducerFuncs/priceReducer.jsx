import { useProduct } from "../service/product_api";

export function priceReducer(state, action){
    switch(action.type){
        case "SORT_PRICE":
            return {...state, sortBy: action.payload}
    }
}

export function itemList(sortBy, data){
    switch (sortBy){
        case "HIGH_TO_LOW" :
            return [...data].sort((a,b) => a["price"] - b["price"])
        case "LOW_TO_HIGH" :
            return [...data].sort((a,b) => b["price"] - a["price"])
            default:
                return [data]
    }
}