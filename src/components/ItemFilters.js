/*
    This components's purpose is to disapkly filtering options -> 
    to filter the list of displayed clothing items
*/
import React, { useState } from 'react'
import  { connect } from 'react-redux'
import { setColorFilter, setSizeFilter } from '../actions/filters'

const ItemFilters = (props) => {
    //Setting initial state for the 'color filter' buttons
    const [isColorActive, setIsColorActive] = useState([
        false, false, false, false, false
    ])
    //Setting initial state for the 'size filter' buttons
    const [isSizeActive, setIsSizeActive] = useState([
        false, false, false, false, false, false
    ])
    //Listing different filter options
    const colorOptions = ["Black", "Rose Nude", "White", "Grey", "Navy"]
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"]

    //Function that handles: toggling of filter buttons' state, and
    //dispatching the appropriate function to the reducer to manipulate the state in the store
    const setFilter = (index, filterType) => {
        //Checking the length of filter text value - not the most fool proof way to do it
        //but it works in this case. If longer then 3 characters then it's a color filter else it's size
        if(filterType.length > 3) {
            //Setting every filter button's active state to false
            for (var i = 0 ; i < isColorActive.length ; i++) {
                isColorActive[i] = false
            }
            //Copying the array of color filter buttons' state
            const activeCopy = [...isColorActive]
            //Changing the value of the selected filter withing the array at the specified index
            activeCopy[index] = !isColorActive[index]
            //Setting the new state
            setIsColorActive(activeCopy)
            //Dispatching the action to the reducer to to filter the state in the store
            activeCopy[index] ? props.dispatch(setColorFilter(filterType)) : props.dispatch(setColorFilter(''))
        } else {
            //Setting every filter button's active state to false
            for (var i = 0 ; i < isSizeActive.length ; i++) {
                isSizeActive[i] = false
            }
            //Copying the array of color filter buttons' state
            const activeCopy = [...isSizeActive]
            //Changing the value of the selected filter withing the array at the specified index
            activeCopy[index] = !isSizeActive[index]
            //Setting the new state
            setIsSizeActive(activeCopy)
            //Dispatching the action to the reducer to to filter the state in the store
            activeCopy[index] ? props.dispatch(setSizeFilter(filterType)) : props.dispatch(setSizeFilter(''))
        }
        
    }

    //Clear filters function - to reset all the filters and show full list of products
    const clearFilters = () => {
        //Dispatching actions to the store
        props.dispatch(setSizeFilter(""))
        props.dispatch(setColorFilter(""))

        //Setting every filter button's active state to false for both type of filters
        for (var i = 0 ; i < isColorActive.length ; i++) {
            isColorActive[i] = false
        }
        for (var i = 0 ; i < isSizeActive.length ; i++) {
            isSizeActive[i] = false
        }
    }

    return (
        <div className="filters__container">
            <div className="content-container">
                <div><span className="filter__header--text">Filter by color:</span> {
                    //Iterating over the different filtering options to programmatically render
                    //button elements for each filter options in the array
                    colorOptions.map((color, index) => (
                        <button 
                            key={index} 
                            className={isColorActive[index] ? "active filter__button" : "filter__button"} 
                            onClick={() => setFilter(index, color)}
                        >{color}
                        </button>
                    ))
                }
                </div>
                <div><span className="filter__header--text">Filter by size:</span> {
                    //Iterating over the different filtering options to programmatically render
                    //button elements for each filter options in the array
                    sizeOptions.map((size, index) => (
                        <button 
                            key={index} 
                            className={isSizeActive[index] ? "active filter__button" : "filter__button"}
                            onClick={() => setFilter(index, size)}
                        >{size}
                        </button>
                    ))
                }
                </div>
                <div className="clear__button" onClick={clearFilters}>CLEAR</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        products: state.products
    }
}

export default connect(mapStateToProps)(ItemFilters);