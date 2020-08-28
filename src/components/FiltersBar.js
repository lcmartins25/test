import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { closeAllDropdowns, closeDropdownsOnClick } from '../utils/dropdownFunctions'

const FiltersBar = ({ setCategory }) => {
   const { data: list, error } = useSWR(
      'http://www.ourglobaltrek.com/wp-json/custom/v1/categories',
      (...args) => axios(...args).then((res) => res.data)
   )

   const [isMobile, setIsMobile] = useState(false)

   window.onresize = function () {
      window.innerWidth > 767 ? setIsMobile(false) : setIsMobile(true)
   }

   const handleClick = (category) => {
      setCategory(category)
      const $button = document.querySelector('details[open]')
      if ($button) {
         $button.removeAttribute('open')
      }
      const $flex = document.querySelector('.flex')
      if ($flex) {
         $flex.classList.remove('flex')
      }
   }

   const openAccordion = (id) => {
      document.querySelector('.dropdown--group__mobile').classList.toggle('flex')
   }

   window.onclick = function (e) {
      closeDropdownsOnClick(e)
   }

   useEffect(() => {
      closeAllDropdowns()
      window.innerWidth > 767 ? setIsMobile(false) : setIsMobile(true)

      return closeAllDropdowns
   }, [])

   if (error) return <h1>Something went wrong!</h1>
   if (!list) return <div></div>

   return (
      <React.Fragment>
         <div className="filters-bar">
            {!isMobile && list.map((item) => (
               <details key={item.id} className="filter--dropdown">
                  <summary key={item.id} className="filter--dropdown button__outline mx-1">{item.name}</summary>
                  {item.children.length > 0 && <div className="filter--dropdown-content">
                     <div key={item.id} onClick={() => handleClick(item)}>{item.name}</div>
                     {item.children.map((child) => (
                        <div key={child.id} onClick={() => handleClick(child)}>{child.name}</div>
                     ))}
                  </div>}
               </details>
            ))}
            {isMobile && <div className="filter--dropdown__mobile">
               <button className="button__outline mx-1" onClick={openAccordion}>Filter by Country</button>
               <div className="dropdown--group__mobile">
                  {list.map((item) => (
                     <details key={item.id} className="filter--dropdown">
                        <summary key={item.id} className="dropdown--header__mobile">{item.name}</summary>
                        {item.children.length > 0 && <div>
                           <div key={item.id} onClick={() => handleClick(item)}>{item.name}</div>
                           {item.children.map((child) => (
                              <div key={child.id} onClick={() => handleClick(child)}>{child.name}</div>
                           ))}
                        </div>}
                     </details>
                  ))}
               </div>
            </div>}
         </div>
      </React.Fragment>
   )
}

export default FiltersBar