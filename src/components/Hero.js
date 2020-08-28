import React from 'react'

const Hero = ({ content: { featuredImage, imageSrcSet } }) => (
   <div className="hero--container hero__page" >
      <img src={featuredImage} srcSet={imageSrcSet} sizes={'100vw'} alt="" />
   </div>
)

export default Hero