import React, { useState, useEffect } from 'react'
import ListContentPages from './ListContentPages'
import FiltersBar from './FiltersBar'
import ScrollToTop from '../utils/ScrollToTop'

const Archive = ({ type = 'posts' }) => {
   ScrollToTop()

   const [pageCount, setPageCount] = useState({ [type]: 1 })
   const [numPages, setNumPages] = useState(1)
   const [category, setCategory] = useState('')
   const [isFetching, setIsFetching] = useState(true)

   useEffect(() => {
      setPageCount({ [type]: 1, ...pageCount })
      setCategory('')
      // eslint-disable-next-line
   }, [type])

   const handleClick = () => {
      setCategory('')
   }

   const pages = []
   for (let i = 0; i < pageCount[type]; i++) {
      pages.push(<ListContentPages
         key={i}
         type={type}
         index={i + 1}
         setNumPages={setNumPages}
         setIsFetching={setIsFetching}
         category={category.id}
         setCategory={setCategory}
      />)
   }

   return (
      <div className="container">
         <FiltersBar setCategory={setCategory} />
         {!isFetching && category && <div className="filters__message">
            Showing results for: "{category.name}"
            <span className="filters__clear" onClick={handleClick}><i className="fas fa-times-circle"></i></span>
         </div>}
         {pages}
         <div >
            {!isFetching && pageCount[type] < numPages && <button className="mt-5" onClick={() => setPageCount({ ...pageCount, [type]: pageCount[type] + 1 })}>Load More</button>}
         </div>
      </div>
   )
}

export default Archive
