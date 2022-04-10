import {useContext, createContext, useReducer} from "react"
import { priceReducer } from "../reducerFuncs/priceReducer";
const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
    const [initialState, filterAction] = useReducer( priceReducer, {
        sortBy : "",
        categorizeByCategory : "",
        categorizeByRating : 0
    });
    return(
        <FilterContext.Provider value = {{initialState, filterAction}}>
            { children }
        </FilterContext.Provider>
    )
}

export { useFilter, FilterProvider}