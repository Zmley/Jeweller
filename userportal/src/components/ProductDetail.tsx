import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Slider from './Slider'
import sample from '../assets/img/productSample.png'
import { ArrowForward, Favorite, FavoriteBorder } from '@material-ui/icons'
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import { getArtist } from '../api/index'
import { Product, User } from '../models'
import './ProductDetail.scss'
import StyleRadio from './Radio'

type ProductProps = {
  product: Product
}

const ProductDetail: React.FC<ProductProps> = (
  props: ProductProps,
  state: any
) => {
  const [product, setProduct] = useState(props.product)
  useEffect(() => {
    const loadArtist = async () => {
      const result = await getArtist(props.product.artistID)
      setArtist(result)
    }
  }, [])
  const [artist, setArtist] = useState()
  const [color, setColor] = useState(true)
  const [size, setSize] = useState(true)
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [liked, setLiked] = useState(false)

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
          {artist && (
            <>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={sample}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={artist.username}
                  secondary={artist.role}
                />
                <IconButton aria-label='delete'>
                  <ArrowForward fontSize='small' />
                </IconButton>
              </ListItem>
            </>
          )}
          <Divider />
          {size && (
            <>
              <Typography variant='body2' component='p' align='center'>
                SIZE
              </Typography>
              <ListItem>
                <StyleRadio
                  checked={selectedColor === size}
                  onChange={e => setSelectedColor(e.target.value)}
                />
                <StyleRadio
                  checked={selectedColor === size}
                  onChange={e => setSelectedColor(e.target.value)}
                />
                <StyleRadio
                  checked={selectedColor === size}
                  onChange={e => setSelectedColor(e.target.value)}
                />
              </ListItem>
              <Divider />
            </>
          )}
          {color && (
            <>
              <Typography variant='body2' component='p' align='center'>
                COLOR
              </Typography>
              <ListItem>
                <StyleRadio
                  checked={selectedColor === color}
                  onChange={e => setSelectedColor(e.target.value)}
                />
                <StyleRadio
                  checked={selectedColor === color}
                  onChange={e => setSelectedColor(e.target.value)}
                />
                <StyleRadio
                  checked={selectedColor === color}
                  onChange={e => setSelectedColor(e.target.value)}
                />
              </ListItem>
              <Divider />
            </>
          )}
        </List>
      </Paper>
    </div>
  )
}

export default ProductDetail
