import React from 'react'
import ImageGallery from 'react-image-gallery'
import './Slider.scss'

const Slider = (props: any, state: any) => {
  const { images } = props
  images.forEach((image: any) => {
    image.original = image.url
  })
  return (
    <ImageGallery
      items={images}
      showNav={false}
      showBullets={true}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      slideDuration={1000}
    />
  )
}

export default Slider
