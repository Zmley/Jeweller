import React from 'react'
import { ArrowForward, Favorite, FavoriteBorder } from '@material-ui/icons'
import {
  Button,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Snackbar,
  SnackbarContent,
  Grid
} from '@material-ui/core'
const Cart: React.FC = (props: any, state: any) => {
  const rawProducts = localStorage.getItem('cart')
  const products = rawProducts ? JSON.parse(rawProducts) : []

  let totalPrice = 0
  return (
    <div style={{ padding: 15 }}>
      <Grid container>
        {products.map((product: any) => {
          totalPrice += Number(product.price)
          return (
            <Grid container>
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
                <Divider style={{ width: '100%' }} />
                <Grid item xs={9}></Grid>
                <Grid item xs={3} style={{ textAlign: 'right' }}>
                  x
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
          backgroundColor: 'black',
          color: '#fff',
          position: 'fixed',
          left: 'calc(50% - 26px)',
          bottom: '100px'
        }}
      >
        -&gt;
      </IconButton>
    </div>
  )
}

export default Cart
