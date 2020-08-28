import React from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './Hero'
import RenderContent from './RenderContent'
import { useRequest } from '../utils/useRequest'

const Page = ({ type = 'pages' }) => {
   const slug = useLocation().pathname.split('/')[1]
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
         {result && <Hero content={result.content[0]} />}
         {result && <RenderContent post={result.content[0].content} title={result.content[0].title} />}
      </div>
   )
}

export default Page