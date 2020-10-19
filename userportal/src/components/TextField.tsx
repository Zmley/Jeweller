import React from 'react'
import { TextField } from '@material-ui/core'

interface Props {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  fullWidth?: boolean
  value: any
  onChange?: (e: React.ChangeEvent<any>) => void
}

const CustomTextField = (props: Props, state: any) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      placeholder='Placeholder'
      size='small'
      required={props.required || false}
      fullWidth={props.fullWidth || false}
      margin='normal'
      value={props.value}
      InputLabelProps={{ shrink: true }}
      onChange={props.onChange}
    />
  )
}

export default CustomTextField
