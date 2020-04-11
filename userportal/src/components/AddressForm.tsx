import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import './AddressForm.scss'
import { IconButton } from '@material-ui/core';
import ArrowRightAltRounded from '@material-ui/icons/ArrowRightAltRounded';

const AddressForm: React.FC = (props: any, state: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const addressInfo = {
      name: name,
      phone: phone,
      address: address,
      postcode: postcode
    }
    console.log('A value was submitted: ' + name + "," + phone + "," + address + "," + postcode);
  }
  const validation = () => {
    if (!(name && phone && address && postcode)) {
      return true
    }
    return false
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={5} alignItems='flex-end' className='addressBox'>
        <Grid item xs={12}>
          <TextField
            id='name'
            label='Name'
            placeholder='Placeholder'
            size='small'
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='phone'
            type='number'
            label='Phone'
            placeholder='Placeholder'
            size='small'
            fullWidth
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address'
            label='Address'
            size='small'
            placeholder='Address'
            fullWidth
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='postcode'
            label='Postcode'
            placeholder='Placeholder'
            size='small'
            fullWidth
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className='btnField'>
          <IconButton aria-label="submmit" className='btn' type="submit" value="Submit" disabled={validation()}>
            <ArrowRightAltRounded fontSize="large" className='submitIcon' />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddressForm
