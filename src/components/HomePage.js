import React from 'react'
import { Link } from 'react-router-dom'
import HomeHero from './HomeHero'
import ListContent from './ListContent'

const HomePage = () => (
   <div>
      <HomeHero />
      <div className="container center home">
         <h1 className="home-title section-header">Travel Blog</h1>
         <ListContent />
         <Link className="button mt-5 mb-8" to={'/travel-blog'}>Read More</Link>
         <h1 className="home-title section-header">Photography</h1>
         <ListContent type={'photos'} perPage={6} />
         <Link className="button mt-5" to={'/photography'}>See More</Link>
      </div>
   </div>
)

export default HomePage