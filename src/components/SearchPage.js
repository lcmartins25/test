import React, { useState, useEffect } from 'react'
import ListContentPages from './ListContentPages'
import SearchBar from './SearchBar'
import { useLocation } from 'react-router-dom'

const SearchPage = ({ type = 'posts' }) => {
   const isNotFound = useLocation().pathname === '/not-found'
   const query = useLocation().search.slice(1)

   const [pageCount, setPageCount] = useState({ [query]: 1 })
   const [numPages, setNumPages] = useState(1)
   const [isFetching, setIsFetching] = useState(true)

   useEffect(() => {
      setPageCount({ [query]: 1, ...pageCount })
      // eslint-disable-next-line
   }, [query])

   const pages = []
   for (let i = 0; i < pageCount[query]; i++) {
      pages.push(<ListContentPages
         key={`${query}-${i}`}
         type={type}
         query={query}
         index={i + 1}
         setNumPages={setNumPages}
         setIsFetching={setIsFetching}
      />)
   }

   return (
      <div className="container container__page">
         {isNotFound &&
            <div>
               <h1 className="title-medium">Oops! It seems like you got lost...</h1>
               <SearchBar />
               <h2>Here are some results that might help you:</h2>
            </div>
         }
         {!isNotFound && <h1 className="title-medium">Showing results for "{query}"</h1>}
         {pages}
         <div>
            {!isFetching && pageCount[query] < numPages && <button onClick={() => setPageCount({ ...pageCount, [query]: pageCount[query] + 1 })}>Load more</button>}
         </div>
      </div>
   )
}

export default SearchPage