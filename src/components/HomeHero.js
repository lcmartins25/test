import React from 'react'
import { useRequest } from '../utils/useRequest'
import Newsletter from './Newsletter'

const HomeHero = () => {
   const { data: result, error } = useRequest({ type: 'pages', slug: 'home' })
   if (error) return <h1>Something went wrong!</h1>
   if (!result) return (
      <div className="hero--container center-content">
         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
         <span className="sr-only">Loading...</span>
      </div>
   )

   return (
      <div className="hero--container" >
         <img src={result.content[0].featuredImage} srcSet={result.content[0].imageSrcSet} sizes={'100vw'} alt="" />
         <div className="hero--content">
            <h1 dangerouslySetInnerHTML={{ __html: result.content[0].title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: result.content[0].content }}></p>
            <Newsletter />
         </div>
      </div>
   )
}

export default HomeHero