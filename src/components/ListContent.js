import React from 'react'
import Card from './Card'
import { useRequest } from '../utils/useRequest'

const ListContent = ({ type = 'posts', perPage = 3 }) => {
   const { data: result, error } = useRequest({ type, isHome: true, perPage })

   if (error) return <h1 className="hero full-height center-content">Something went wrong!</h1>
   if (!result) return (
      <div>
         <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
         <span className="sr-only">Loading...</span>
      </div>
   )

   return (
      <div>
         {result.content.map((post) => (
            <Card key={post.title} content={post} type={type} />
         ))}
      </div>
   )
}

export default ListContent