import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import CheckIcon from '@material-ui/icons/Check'
import './Radio.scss'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
})
interface InputProps {
  color?: string
  size?: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
// Inspired by blueprintjs
export default function StyledRadio(
  props: RadioProps,
  { color, size, checked, onChange }: InputProps
) {
  const classes = useStyles()
  return (
    <Radio
      className={classes.root}
      disableRipple
      checked={checked}
      onChange={onChange}
      value={color || size}
      color='default'
      checkedIcon={
        <div className='radioChecked'>
          {color && <CheckIcon style={{ color: '#fff' }} />}
          {size && size}
        </div>
      }
      icon={
        <div
          className={color ? 'radio color' : 'radio'}
          style={{ backgroundColor: color || '#E7E7E7' }}
        >
          {size && size}
        </div>
      }
      {...props}
    />
  )
}
