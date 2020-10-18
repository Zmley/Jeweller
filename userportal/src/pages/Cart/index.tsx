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
  console.log(products)
  return (
    <div>
      <Grid container>
        {products.map((product: any) => (
          <Grid container>
            <Grid>
              <Avatar>PR</Avatar>
            </Grid>
            {product.name}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Cart
