import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import './Address.scss'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import ArrowRightAltRounded from '@material-ui/icons/ArrowRightAltRounded'

const AddressForm: React.FC = (props: any, state: any) => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState('')
  const [postcode, setPostcode] = useState('')
  const handleSubmit = (event: any) => {
    event.preventDefault()
    history.push('/checkout')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems='flex-end' className='addressBox'>
        <Grid item xs={12} className='input'>
          <TextField
            id='name'
            label='Name'
            placeholder='Placeholder'
            size='small'
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            margin='normal'
            defaultValue={name}
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className='input'>
          <TextField
            id='phone'
            type='number'
            label='Phone'
            required
            placeholder='Placeholder'
            size='small'
            fullWidth
            margin='normal'
            defaultValue={phone}
            InputLabelProps={{ shrink: true }}
            onChange={e => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className='input'>
          <TextField
            id='address'
            label='Address'
            size='small'
            required
            margin='normal'
            placeholder='Address'
            fullWidth
            defaultValue={address}
            InputLabelProps={{ shrink: true }}
            onChange={e => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className='input'>
          <TextField
            id='postcode'
            label='Postcode'
            placeholder='Placeholder'
            size='small'
            required
            fullWidth
            margin='normal'
            defaultValue={postcode}
            InputLabelProps={{ shrink: true }}
            onChange={e => setPostcode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className='btnField'>
          <IconButton
            aria-label='submmit'
            className='btn'
            type='submit'
            value='Submit'
          >
            <ArrowRightAltRounded fontSize='large' className='submitIcon' />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddressForm
