import React, { useState } from 'react'
import axios from 'axios'

const Newsletter = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://www.ourglobaltrek.com/wp-json/newsletter/v1/subscribe', {
         name,
         email
      })
      setMessage(true)
   }

   if (message) return <div className="newsletter--message">Thank you for signing up! Please check your email.</div>

   return (
      <div className='newsletter--container'>
         <form action="" autoComplete='off' onSubmit={handleSubmit}>
            <div className='newsletter--field'>
               <input
                  className='newsletter--input'
                  name='name'
                  type="text"
                  placeholder=' '
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <label htmlFor="">Name</label>
            </div>
            <div className='newsletter--field'>
               <input
                  className='newsletter--input newsletter--input__email'
                  name='email'
                  type="email"
                  placeholder=' '
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
               />
               <label htmlFor="">Email</label>
            </div>
            <input className='button button__form' type="submit" value='Sign Up' />
         </form>
      </div>
   )
}

export default Newsletter