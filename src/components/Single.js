import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Hero from './Hero'
import RenderContent from './RenderContent'
import { useRequest } from '../utils/useRequest'
import RelatedPosts from './RelatedPosts'
import Comments from './Comments'
import ScrollToTop from '../utils/ScrollToTop'


const Single = ({ type = 'posts' }) => {
   ScrollToTop()

   const slug = useRouteMatch().params.slug
   const { data: result, error } = useRequest({ type, slug })

   if (error) return <h1 className="spinner">Something went wrong!</h1>
   if (!result) return (
      <div className="spinner">
         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
         <span className="sr-only">Loading...</span>
      </div>
   )

   return (
      <div>
         <Hero content={result.content[0]} />
         <RenderContent post={result.content[0].content} title={result.content[0].title} />
         <RelatedPosts content={result.content[0].relatedPosts} />
         <Comments id={result.content[0].id} />
      </div>
   )
}

export default Single