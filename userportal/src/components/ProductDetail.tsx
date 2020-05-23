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
  const [liked, setLiked] = useState(false)
  const loadArtist = async () => {
    const result = await getArtist(props.product.artistID)
    setArtist(result)
  }
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
                <Typography gutterBottom variant='subtitle1'>
                  {product.name}
                </Typography>
                <Typography variant='h4'>${product.price}</Typography>
              </Grid>
              <Grid item xs>
                <Typography variant='body2' color='textSecondary'>
                  {product.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs container direction='column' alignItems='center'>
              <Grid item>
                {liked ? (
                  <IconButton
                    className='button'
                    onClick={() => setLiked(false)}
                  >
                    <Favorite className='like' />
                  </IconButton>
                ) : (
                  <IconButton className='button' onClick={() => setLiked(true)}>
                    <FavoriteBorder className='like' />
                  </IconButton>
                )}
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  align='left'
                  className='count'
                >
                  {product.likeCount}
                </Typography>
              </Grid>
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
              <IconButton aria-label='delete'>
                <ArrowForward fontSize='small' />
              </IconButton>
            </ListItem>
          )}
          <Divider />
          <ListItem>
            <FormControl component='fieldset' className='radioBox'>
              <FormLabel component='span' className='formLabel'>
                Size
              </FormLabel>
              <RadioGroup
                aria-label='gender'
                name='size'
                value={product.size}
                onChange={handleChange}
                className='radioGroup'
                row
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                  labelPlacement='bottom'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                  labelPlacement='bottom'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                  labelPlacement='bottom'
                />
              </RadioGroup>
            </FormControl>
          </ListItem>
          <Divider />
          <ListItem></ListItem>
        </List>
      </Paper>
    </div>
  )
}

export default ProductDetail
