import React from 'react'

const Image = ({ImgSrc,ImgAlt,className}) => {
  return (
    <img className={`${className}`} src={ImgSrc} alt={ImgAlt} />
  )
}

export default Image
