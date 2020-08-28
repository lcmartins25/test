import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const PhotoSlider = ({ post }) => {
   const [isMobile, setIsMobile] = useState(false)

   window.onresize = function () {
      window.innerWidth > 769 ? setIsMobile(false) : setIsMobile(true)
   }

   useEffect(() => {
      window.innerWidth > 769 ? setIsMobile(false) : setIsMobile(true)
   }, [])


   let posts = []
   const str = '<figure '
   const postArr = post.replace(/\r?\n|\r/g, '').split('<figure ')
   postArr.forEach((post) => posts.push(str.concat(post)))
   posts = posts.splice(1)

   return (
      <div className="container__photos">
         {!isMobile &&
            <Carousel showThumbs={false} useKeyboardArrows={true} showStatus={false}>
               {posts.map((el, idx) => (<div className="slider-container" key={idx} dangerouslySetInnerHTML={{ __html: el }}></div>
               ))}
            </Carousel>}
         {isMobile && <div dangerouslySetInnerHTML={{ __html: post }}></div>}

      </div>

   )
}

export default PhotoSlider
