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
import { getArtist, setLike } from '../api/index'
import { Product } from '../models'
import './ProductDetail.scss'
import StyleRadio from './Radio'

interface ProductProps {
  product: Product
}

const ProductDetail: React.FC<ProductProps> = ({ product }: ProductProps) => {
  useEffect(() => {
    const loadArtist = async () => {
      const result = await getArtist(product.artistID)
      setArtist(result)
      console.log(result)
    }
    loadArtist()
  }, [])
  const [artist, setArtist] = useState()
  const [selectedColor, setSelectedColor] = useState(
    product.selections[0] && product.selections[0].color
  )
  const [selectedSize, setSelectedSize] = useState(
    product.selections[0] && product.selections[0].size
  )
  const [selectedPrice, setSelectedPrice] = useState(
    product.selections[0] ? product.selections[0].price : 'null'
  )
  const [liked, setLiked] = useState(false)
  const handleSelectPriceByColor = (e: any, index: number) => {
    setSelectedColor(e.target.value)
    const selection = product.selections[index]
    if (selection.color === e.target.value && selection.size === selectedSize) {
      setSelectedPrice(selection.price)
    } else {
      setSelectedPrice('null')
    }
  }
  const handleSelectPriceBySize = (e: any, index: number) => {
    setSelectedSize(e.target.value)
    const selection = product.selections[index]
    if (
      selection.color === selectedColor &&
      selection.size === e.target.value
    ) {
      setSelectedPrice(selection.price)
    } else {
      setSelectedPrice('null')
    }
  }
  const handleLike = (isLike: boolean) => {
    setLike(isLike)
    setLiked(isLike)
  }
  return (
    <div className='productCard'>
      <Paper elevation={0}>
        <Slider></Slider>
        <Grid container>
          <Grid item xs={12} container className='productInfo'>
            <Grid xs={10} item container direction='column'>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {product.name}
                </Typography>
                <Typography variant='h4'>${selectedPrice}</Typography>
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
                    onClick={() => handleLike(false)}
                  >
                    <Favorite className='like' />
                  </IconButton>
                ) : (
                  <IconButton
                    className='button'
                    onClick={() => handleLike(true)}
                  >
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
          {product.selections.length > 0 && product.selections[0].size && (
            <>
              <Typography variant='h6' align='center'>
                SIZE
              </Typography>
              <ListItem className='radioBox'>
                {product.selections.map((selection, index) => {
                  return (
                    <StyleRadio
                      key={selection.size}
                      checked={selectedSize === selection.size}
                      sizeValue={selection.size}
                      onChange={(e: any) => {
                        handleSelectPriceBySize(e, index)
                      }}
                    />
                  )
                })}
              </ListItem>
              <Divider />
            </>
          )}
          {product.selections.length > 0 && product.selections[0].color && (
            <>
              <Typography variant='h6' align='center'>
                COLOR
              </Typography>
              <ListItem className='radioBox'>
                {product.selections.map((selection, index) => (
                  <StyleRadio
                    key={selection.color}
                    checked={selectedColor === selection.color}
                    colorValue={selection.color}
                    onChange={(e: any) => {
                      handleSelectPriceByColor(e, index)
                    }}
                  />
                ))}
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
