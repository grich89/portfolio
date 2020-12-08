import React from 'react'
import classNames from 'classnames/bind'

const Picture = ({ image, className='', altText }) => {
  return (
    <picture className={classNames('picture', className)}>
      <img src={image} alt={altText} />
    </picture>
  )
}
export default Picture
