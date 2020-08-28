import React from 'react'
import Card from './Card'

const RelatedPosts = ({ content }) => {
   if (!content) return <div></div>

   return (
      <React.Fragment>
         <h1 className="section-header center">Related Posts</h1>
         <div className="container__related">
            {content.map(({ title, url: link, img: { src: featuredImage } }) => {
               const content = { title, featuredImage, link: link.split('.com')[1] }
               return <Card key={title} content={content} />
            }
            )}
         </div>
      </React.Fragment>
   )
}

export default RelatedPosts

