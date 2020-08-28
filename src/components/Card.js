import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Card = ({ content: { excerpt, featuredImage, link, title, imageSrcSet }, type = 'posts' }) => {
   let location = useLocation().pathname
   const isHome = location === '/' ? true : false
   const isPhotos = type === 'photos' ? true : false

   return (
      <React.Fragment>
         {isHome &&
            <Link className={isPhotos ? 'photo-card__home' : 'card-container__home'} to={link}>
               {featuredImage && <img className={isPhotos ? 'photo-image__home' : 'card-image__home'} src={featuredImage} srcSet={imageSrcSet} sizes={'(max-width: 425px) 100vw, 33vw'} alt="" />}
               <div className={isPhotos ? 'photo-container__home' : 'card-content__home'}>
                  {title && <h1 className={isPhotos ? 'photo-title__home' : 'card-title__home'} dangerouslySetInnerHTML={{ __html: title }}></h1>}
                  {excerpt && !isPhotos && <p className='card-text__home' dangerouslySetInnerHTML={{ __html: excerpt }}></p>}
               </div>
            </Link>
         }
         {!isHome &&
            <Link className='card-container' to={link}>
               {featuredImage && <img src={featuredImage} srcSet={imageSrcSet} sizes={'(max-width: 425px) 100vw, 33vw'} alt="" />}
               {title && <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>}
            </Link>
         }
      </React.Fragment>
   )
}

export default Card