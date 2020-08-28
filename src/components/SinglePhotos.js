import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import PhotoSlider from './PhotoSlider'
import { useRequest } from '../utils/useRequest'

const SinglePhotos = ({ type = 'photos' }) => {
   const slug = useRouteMatch().params.slug
   const { data: result, error } = useRequest({ type, slug })

   if (error) return <h1>Something went wrong!</h1>
   if (!result) return (
      <div className="hero full-height center-content">
         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
         <span className="sr-only">Loading...</span>
      </div>
   )

   return (
      <PhotoSlider post={result.content[0].content} title={result.content[0].title} />
   )
}

export default SinglePhotos