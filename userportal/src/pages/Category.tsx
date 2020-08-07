import React from 'react'
import { Tabs, AppBar, Tab } from '@material-ui/core'
import ProductList from 'components/ProductList'
import './Category.scss'

const Category: React.FC = (props: any, state: any) => {
  const catalogues = props.location.state.catalogues
  const [selected, setSelected] = React.useState(props.location.state.selected)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelected(newValue)
  }
  return (
    <div className='main'>
      <AppBar position='static' color='default'>
        <Tabs
          value={selected}
          variant='scrollable'
          scrollButtons='auto'
          className='tabs'
          classes={{
            indicator: 'indicator'
          }}
          onChange={handleChange}
        >
          {catalogues.map((catalogue: any) => (
            <Tab label={catalogue.name} className='tab' />
          ))}
        </Tabs>
      </AppBar>
      <ProductList />
    </div>
  )
}

export default Category
