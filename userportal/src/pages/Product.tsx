import React from 'react'
import ProductDetail from '../components/ProductDetail'
import RelatedProducts from '../components/RelatedProducts'

const Product: React.FC = (props: any, state: any) => {
  return (
    <div className='main'>
      <ProductDetail product={props.location.state.product} />
      <RelatedProducts />
    </div>
  )
}

export default Product
