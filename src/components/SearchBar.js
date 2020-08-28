import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
   const history = useHistory()
   const [search, setSearch] = useState('')

   const onChange = (e) => {
      setSearch(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      history.push(`/search?${search}`)
      setSearch('')
   }

   return (
      <div>
         <form action="" onSubmit={handleSubmit}>
            <div className="newsletter--field">
               <input className="newsletter--input" type="text" placeholder=" " value={search} onChange={onChange} />
               <label htmlFor="">Search</label>
            </div>
            <div className="form-container">
               <button className="button__form">Search</button>
            </div>
         </form>
      </div>
   )
}

export default SearchBar