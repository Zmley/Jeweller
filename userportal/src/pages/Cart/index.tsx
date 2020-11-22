import React, { useState } from 'react'
import { IconButton, Divider, Avatar, Grid } from '@material-ui/core'
import DeleteIcon from 'components/Icons/DeleteIcon'
import ForwardIcon from 'components/Icons/ForwardIcon'
const Cart: React.FC = (props: any, state: any) => {
  const rawProducts = localStorage.getItem('cart')

  const [products, setProducts] = useState(
    rawProducts ? JSON.parse(rawProducts) : []
  )
  let totalPrice = 0
  const removeProduct = (index: any) => {
    const newProducts = [...products]
    newProducts.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(newProducts))
    setProducts(newProducts)
  }
  return (
    <div style={{ padding: 15 }}>
      <Grid container spacing={3}>
        {products.map((product: any, index: number) => {
          totalPrice += Number(product.price)
          return (
            <Grid container item key={index}>
              <Grid xs={3}>
                <Avatar
                  style={{ width: 77, height: 77 }}
                  src={product.images[0].url}
                >
                  PR
                </Avatar>
              </Grid>
              <Grid style={{ paddingTop: 8 }} container item xs={9}>
                <Grid xs={9} item>
                  {product.name}
                </Grid>
                <Grid xs={3} item style={{ textAlign: 'right' }}>
                  ${product.price}
                </Grid>
                <Divider style={{ width: '100%', marginBottom: 16 }} />
                <Grid item xs={9}></Grid>
                <Grid
                  item
                  xs={3}
                  style={{ textAlign: 'right' }}
                  onClick={() => {
                    removeProduct(index)
                  }}
                >
                  <DeleteIcon />
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
      <Grid
        container
        style={{
          height: 51,
          backgroundColor: '#FCFCFC',
          marginTop: 30,
          lineHeight: '51px'
        }}
      >
        <Grid style={{ textTransform: 'uppercase' }} xs={9}>
          subtotal
        </Grid>
        <Grid xs={3} style={{ textAlign: 'right' }}>
          ${totalPrice}
        </Grid>
      </Grid>
      <IconButton
        style={{
          color: '#fff',
          position: 'fixed',
          left: 'calc(50% - 43px)',

          bottom: '80px'
        }}
        href='/address'
      >
        <ForwardIcon />
      </IconButton>
    </div>
  )
}

export default Cart
