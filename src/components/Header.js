import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

window.onscroll = function () { scrollFunction() }

function scrollFunction() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector(".header").classList.add('background')
   } else {
      document.querySelector(".header").classList.remove('background')
   }
}

const Header = props => {
   const [search, setSearch] = useState('')
   const history = useHistory()

   const handleSubmit = (e) => {
      e.preventDefault()
      history.push(`/search?${search}`)
      setSearch('')
   }

   const handleChange = (e) => {
      setSearch(e.target.value)
   }

   useEffect(() => {
      document.querySelector('.burger-menu').addEventListener('click', () => {
         document.querySelector('.dropdown-content').classList.toggle('block')
      })

      document.querySelector('.dropdown-content').addEventListener('click', () => {
         document.querySelector('.dropdown-content').classList.toggle('block')
      })
   }, [])

   return (
      <div className='header'>
         <div className="nav">
            <NavLink className='header__logo' to='/'>ourglobaltrek</NavLink>
            <NavLink className='header__link' activeClassName="is-active" to='/our-story'>Our Story</NavLink>
            <NavLink className='header__link' activeClassName="is-active" to='/travel-blog'>Travel Blog</NavLink>
            <NavLink className='header__link' activeClassName="is-active" to='/photography'>Photography</NavLink>
         </div>
         <div className="social social__header social__tablet">
            <a
               href='https://www.facebook.com/ourglobaltrek'
               rel="noopener noreferrer"
               target="_blank">
               <i className="fab fa-facebook-f"></i>
            </a>
            <a
               href='https://www.instagram.com/ourglobaltrek/'
               rel="noopener noreferrer"
               target="_blank">
               <i className="fab fa-instagram"></i>
            </a>
         </div>
         <div>
            <form action="" onSubmit={handleSubmit}>

               <input type="text" value={search} className="search" onChange={handleChange} placeholder="Search" />
            </form>
            <div className="mobile dropdown">
               <button className=" mobile burger-menu"><i className="fas fa-bars"></i></button>
               <div className="dropdown-content">
                  <NavLink className='header__link' activeClassName="is-active" to='/our-story'>Our Story</NavLink>
                  <NavLink className='header__link' activeClassName="is-active" to='/travel-blog'>Travel Blog</NavLink>
                  <NavLink className='header__link' activeClassName="is-active" to='/photography'>Photography</NavLink>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header