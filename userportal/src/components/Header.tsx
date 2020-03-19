import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Slider from './Slider'

const Header: React.FC = (props: any, state: any) => {
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }
  return (
    <div>
      <div className='searchBar'>
        <Grid container spacing={1} alignItems='flex-end'>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id='input-with-icon-grid' label='With a grid' />
          </Grid>
          <Grid item>
            <img src='./assets/img/Cart.png'></img>
          </Grid>
        </Grid>
      </div>
      <Chip
        size='small'
        icon={<FaceIcon />}
        label='Primary Clickable'
        avatar={<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />}
        onClick={handleClick}
        clickable
        color='primary'
      />
      <Slider></Slider>
    </div>
  )
}

export default Header
