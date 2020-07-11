import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import CheckIcon from '@material-ui/icons/Check'
import './Radio.scss'

// Inspired by blueprintjs
export default function StyledRadio({
  colorValue,
  sizeValue,
  checked,
  onChange,
  ...props
}: any) {
  return (
    <Radio
      disableRipple
      checked={checked}
      onChange={onChange}
      value={colorValue || sizeValue}
      color='default'
      checkedIcon={
        <div
          className={colorValue ? 'radioChecked color' : 'radioChecked size'}
          style={{ backgroundColor: colorValue }}
        >
          {colorValue && (
            <CheckIcon
              style={{
                color: '#fff'
              }}
            />
          )}
          {sizeValue && sizeValue}
        </div>
      }
      icon={
        <div
          className={colorValue ? 'radio color' : 'radio'}
          style={{ backgroundColor: colorValue || '#E7E7E7' }}
        >
          {sizeValue && sizeValue}
        </div>
      }
      {...props}
    />
  )
}
