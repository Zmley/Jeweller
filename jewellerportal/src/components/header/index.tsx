import React, { useState } from 'react'
import './index.scss'
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@material-ui/core'
const items = {
  account: [],
  works: [
    { text: 'sellings', link: '' },
    { text: 'sold/history', link: '' },
    { text: 'gallery', link: '' },
    { text: 'upload new', link: '' }
  ],
  orders: [],
  help: [
    { text: 'insurance', link: '' },
    { text: 'shipping', link: '' },
    { text: 'Q&A', link: '' },
    { text: 'contact us', link: '' }
  ]
}
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuList, setMenuList] = useState([])
  const openMenu = (e: any, list: any) => {
    setAnchorEl(e.currentTarget)
    setMenuOpen(true)
    setMenuList(list)
  }
  return (
    <AppBar position='static' className='header'>
      <img src='img/logo.png' height='60' width='70' alt='logo' />
      <List component='nav' className='menuList' aria-label='contacts'>
        <ListItem
          className='listItem'
          button
          onClick={e => openMenu(e, items.account)}
        >
          <ListItemText primary='Account' />
        </ListItem>
        <ListItem
          className='listItem'
          button
          onClick={e => openMenu(e, items.works)}
        >
          <ListItemText inset primary='Works' />
        </ListItem>
        <ListItem
          className='listItem'
          button
          onClick={e => openMenu(e, items.orders)}
        >
          <ListItemText inset primary='Orders' />
        </ListItem>
        <ListItem
          className='listItem'
          button
          onClick={e => openMenu(e, items.help)}
        >
          <ListItemText inset primary='Help' />
        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        keepMounted
        onClose={() => setMenuOpen(false)}
        transformOrigin={{ vertical: -50, horizontal: -30 }}
        className='menu'
        PaperProps={{
          style: {
            maxHeight: '150',
            width: '20ch'
          }
        }}
      >
        {menuList.map((menuItem: any) => (
          <MenuItem>{menuItem.text}</MenuItem>
        ))}
      </Menu>
    </AppBar>
  )
}

export default Header
