import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Slider from './Slider'
import sample from '../assets/img/productSample.png'
import { ArrowForward, Favorite, FavoriteBorder } from '@material-ui/icons'
import {
  Grid,
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  IconButton,
  Typography,
  Divider,
  List,
  Radio,
  RadioGroup,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import { getArtist } from '../api/index'
import { Product, User } from '../models'
import './ProductDetail.scss'

type ProductProps = {
  product: Product
}

const ProductDetail: React.FC<ProductProps> = (
  props: ProductProps,
  state: any
) => {
  const [product, setProduct] = useState(props.product)
  useEffect(() => {
    loadArtist()
  }, [])
  const [artist, setArtist] = useState()
  const loadArtist = async () => {
    const result = await getArtist(props.product.artistID)
    console.log(result)
    setArtist(result)
  }
  console.log(artist)
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
        <Grid container>
          <Grid item xs={12} container className='productInfo'>
            <Grid xs={10} container direction='column'>
              <Grid item xs>
                <Typography gutterBottom variant='h4'>
                  {product.name}
                </Typography>
                <Typography variant='body2'>${product.price}</Typography>
              </Grid>
              <Grid item xs>
                <Typography variant='body2' color='textSecondary'>
                  {product.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs>
              <IconButton className='button'>
                <Favorite className='like' />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify='space-around'
            className='btnArea'
          >
            <Button variant='outlined'>PURCHASE NOW</Button>
            <Button variant='outlined'>ADD TO CART</Button>
          </Grid>
        </Grid>
        <List>
          <Divider />
          {artist && (
            <ListItem>
              <ListItemAvatar>
                <Avatar src={sample}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={artist.username} secondary={artist.role} />
              <ArrowForward />
            </ListItem>
          )}
          <Divider />
          <ListItem>
            <FormControl component='fieldset' className='radioBox'>
              <FormLabel component='legend'>Size</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='size'
                value={product.size}
                onChange={handleChange}
                className='radioGroup'
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
      </Paper>
    </div>
  )
}

export default ProductDetail
