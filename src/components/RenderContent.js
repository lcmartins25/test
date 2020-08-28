import React, { useEffect } from 'react'

const RenderContent = ({ post, title }) => {
   const addImageClass = () => {
      const images = document.querySelectorAll('.container__content img')
      const figures = document.querySelectorAll('figure')
      figures.forEach((figure) => {
         figure.removeAttribute('style')
      })
      images.forEach((image) => {
         image.removeAttribute('width')
         image.removeAttribute('height')
         image.addEventListener('load', () => {
            const width = image.width
            const height = image.height
            width > height ? image.classList.add('landscape') : image.classList.add('portrait')
         })
      })
   }

   useEffect(() => {
      addImageClass()
   }, [])

   return (
      <div className="container__content">
         <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
         <div dangerouslySetInnerHTML={{ __html: post }}></div>
      </div>
   )
}

export default RenderContent