import React from 'react'
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/'
  }
]

const Slider: React.FC = (props: any, state: any) => {
  return <ImageGallery items={images} />
}

export default Slider
