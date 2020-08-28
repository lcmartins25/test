import React, { useEffect } from 'react'
import { useRequest } from '../utils/useRequest'
import Card from './Card'

const ListContentPages = ({ type, index, setNumPages, setIsFetching, query, category }) => {
   const { data: result, error } = useRequest({ type, index, query, category })

   useEffect(() => {
      if (result) {
         setNumPages(result.totalPages)
         setIsFetching(false)
      } else {
         setIsFetching(true)
      }
      // eslint-disable-next-line
   }, [result])

   if (error) return <h1 className="height-short-loading center-content mt-5">Something went wrong!</h1>
   if (!result) return <div className="height-short-loading center-content mt-5">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
   </div>
   if (result.content.length === 0) return <h1>No results found!</h1>

   return (
      <div className="grid">
         {result.content.map((post) => (
            <Card key={post.link} content={post} />
         ))}
      </div>
   )
}

export default ListContentPages