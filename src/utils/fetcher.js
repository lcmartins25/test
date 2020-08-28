import axios from 'axios'

export default (...args) => axios(...args).then((res) => {
   const data = {
      totalPages: res.headers['x-wp-totalpages'],
      content: []
   }
   res.data.forEach((entry) => {
      data.content.push({
         id: entry.id,
         title: entry.title.rendered,
         featuredImage: entry.featured_media_src,
         link: entry.link ? entry.link.split('.com')[1] : entry.url.split('.com')[1] || undefined,
         content: entry.content ? entry.content.rendered : undefined,
         excerpt: entry.excerpt ? entry.excerpt.rendered : undefined,
         imageSrcSet: entry.featured_media_srcset ? entry.featured_media_srcset : undefined,
         relatedPosts: entry['jetpack-related-posts']
      })
   })

   return data
})