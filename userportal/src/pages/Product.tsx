import React from 'react'
import ProductDetail from '../components/ProductDetail'
import RelatedProducts from '../components/RelatedProducts'

const Product: React.FC = (props: any, state: any) => {
    return (
        <div>
            <ProductDetail productInfoString={props.params.productInfo} />
            <RelatedProducts />
        </div>
    )
}

export default Product