import { addItemToCartHandler } from "../../backend/controllers/CartController"
import "./FilterNavbar.css"
import { useState } from "react"

import { useFilter } from "../../Context/FilterContext"
import {catList} from "../../reducerFuncs/categoryreducer"

   
export function FilterNavbar() {
    const { initialState : {sortBy, categorizeByCategory, categorizeByRating }, filterAction} = useFilter();
    // const { data } = useProduct();
 
    return (
        
        <div className="navigation">
            <ul className="main-list">
                <li>
                    <div className="navbar navheading">
                        <a href="#">
                            <span className="title">Filter</span>
                        </a>
                        <a href="#">
                            <span className="title">Clear</span>
                        </a>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <a href="#">
                            <span className="title">Price</span>
                        </a>
                        <div className="nav-sublists">
                            <ul>
                                <li>
                                    <input type="radio" name="c1" id="ss1" checked = {sortBy && sortBy === "LOW_TO_HIGH"} onClick={() => filterAction({ type : "SORT_PRICE", payload : "LOW_TO_HIGH"})}/>
                                    <label htmlFor="ss1">High to Low</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="ss2" checked = {sortBy && sortBy === "HIGH_TO_LOW"} onClick={() => filterAction({ type : "SORT_PRICE", payload : "HIGH_TO_LOW"})}/>
                                    <label htmlFor="ss2">Low to high</label>
                                </li>
                            </ul>
                        </div>
                        <a href="#">
                            <span className="title"> Slider Component</span>
                        </a>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <div className="head-nav">
                            <a href="#">
                                <span className="title">Category</span>
                            </a>
                        </div>
                        <div className="nav-sublists">
                            <ul>
                                {catList.map((categoryTitle) => {
                                    return(
                                    <li>
                                        <input type="checkbox" name="c1" id="c1" key= {categoryTitle} onChange = {() => filterAction({type : "SORT_CATEGORY", payload : categoryTitle})}/>
                                        <label htmlFor="c1">{categoryTitle}</label>
                                    </li>
                                )})}
                            </ul>
                        </div>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <div className="head-nav">
                            <a href="#">
                                <span className="title">Rating</span>
                            </a>
                        </div>
                        <br />
                        <div className="nav-sublists">
                            <ul>
                                <li>
                                    <input type="radio" name="c1" id="s1" checked = {categorizeByRating && categorizeByRating === "4-5"} onChange={() => filterAction({type : "SORT_RATING", payload : "4-5"})}/>
                                    <label htmlFor="s1">4 Stars && above</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="s2" checked = {categorizeByRating && categorizeByRating === "3-4"} onChange={() => filterAction({type : "SORT_RATING", payload : "3-4"})}/>
                                    <label htmlFor="s2">3 Stars && above</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="s3" checked = {categorizeByRating && categorizeByRating === "2-3"} onChange={() => filterAction({type : "SORT_RATING", payload : "2-3"})}/>
                                    <label htmlFor="s3">2 Stars && above</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="s4" checked = {categorizeByRating && categorizeByRating === "1-2"} onChange={() => filterAction({type : "SORT_RATING", payload : "1-2"})}/>
                                    <label htmlFor="s4">1 Stars && above</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div className="small-space"></div>
            </ul>
        </div>
    )
}