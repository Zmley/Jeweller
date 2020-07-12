import React from 'react'
import Gallery from '../components/Gallery'
const Favourite: React.FC = (props: any, state: any) => {
  const favoriteProducts = localStorage.getItem('favoirte')
  return (
    <div>
      <Gallery products={favoriteProducts} />
    </div>
  )
}

export default Favourite
