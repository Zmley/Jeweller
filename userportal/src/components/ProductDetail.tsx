import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Slider from './Slider'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import sample from '../assets/img/productSample.png'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import RelatedProduct from './RelatedProducts'
import { Product } from '../models'

type ProductProps = {
  productInfoString: string
}

const ProductDetail: React.FC<ProductProps> = (
  props: ProductProps,
  state: any
) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    size: '',
    price: 0
  })
  useEffect(() => {
    const productInfo: Product = JSON.parse(props.productInfoString)
    setProduct(productInfo)
  }, [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className='productCard'>
      <Paper elevation={0}>
        <Slider></Slider>
        <Grid container spacing={2}>
          <Grid item xs={10} sm container direction='column'>
            <Grid item xs>
              <Typography gutterBottom variant='h4'>
                {product.name}
              </Typography>
              <Typography variant='body2'>${product.price}</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2' color='textSecondary'>
                {product.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} sm></Grid>
          <Grid item xs={12} sm container spacing={3} justify='space-around'>
            <Grid item xs={6} sm>
              <Button variant='outlined'>PURCHASE NOW</Button>
            </Grid>
            <Grid item xs={6} sm>
              <Button variant='outlined'>ADD TO CART</Button>
            </Grid>
          </Grid>
        </Grid>
        <List>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar src={sample}></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Photos' secondary='Jan 9, 2014' />
            <ArrowForwardIcon />
          </ListItem>
          <Divider />
          <ListItem>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Size</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='size'
                value={product.size}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </FormControl>
          </ListItem>
          <Divider />
          <ListItem></ListItem>
          <Divider />
        </List>
        <RelatedProduct />
      </Paper>
    </div>
  )
}

export default ProductDetail
