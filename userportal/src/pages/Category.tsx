import React from 'react'
import { Tabs, AppBar, Tab } from '@material-ui/core'
import ProductList from 'components/ProductList'
import { Product } from 'models'
import './Category.scss'

const Category: React.FC = (props: any, state: any) => {
  const catalogue = props.location.state.catalogue
  const products = props.location.state.products
  const [selected, setSelected] = React.useState('all')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelected(newValue)
  }
  const filtedProducts =
    selected === 'all'
      ? products
      : products.filter((product: Product) => {
          if (product.tags.find(tag => tag.includes(selected.toLowerCase()))) {
            return true
          }
          return false
        })
  return (
    <div className='main'>
      {catalogue.json_agg.length > 0 && catalogue.json_agg[0].name ? (
        <>
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
              <Tab key={'all'} label={'ALL'} className='tab' value={'all'} />
              {catalogue.json_agg.map((catalogue: any) => (
                <Tab
                  key={catalogue.id}
                  label={catalogue.name}
                  className='tab'
                  value={catalogue.name}
                />
              ))}
            </Tabs>
          </AppBar>
          <ProductList products={filtedProducts} />
        </>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  )
}

export default Category
