/*
    Dashboard component - essentially it's the main component that renders all the other components
*/

import React from 'react'
import Header from './Header'
import ItemFilters from './ItemFilters'
import ProductsList from './ProductsList'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <ItemFilters />
            <div className="content-container">
                <ProductsList />
            </div>
        </div>
    )
}

export default Dashboard