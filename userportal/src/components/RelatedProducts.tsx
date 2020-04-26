import React, { useState, useEffect } from 'react'
import { getRelatedProducts } from '../api'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './RelatedProducts.scss'


const RelatedProduct: React.FC = (props: any, state: any) => {
    useEffect(() => {
        loadProducts()
    }, [])
    const [products, setProducts] = useState([])
    const loadProducts = async () => {
        const result = await getRelatedProducts()
        const { data } = result
        setProducts(data)
    }
    console.log(products)
    return (
        <div className="root">
            <GridList className="gridList" cols={2.5}>
                {products.map((product) => (
                    <GridListTile key={product}>
                        <img src='#' alt='' />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default RelatedProduct