export default ({ type, slug, category, index, isHome, query, perPage = 24 }) => {
   const baseURL = `https://www.ourglobaltrek.com/wp-json/wp/v2`
   if (slug) return `${baseURL}/${type}?slug=${slug}&_fields=id,title,content,featured_media_src,featured_media_srcset,featured_media,link,url,jetpack-related-posts`
   if (category) return `${baseURL}/${type}?categories=${category}&per_page=${perPage}&_fields=title,slug,featured_media_src,featured_media,featured_media_srcset,link&page=${index}`
   if (isHome && type === 'posts') return `${baseURL}/${type}?per_page=${perPage}&_fields=title,slug,featured_media_src,featured_media,featured_media_srcset,excerpt,link`
   if (isHome && type === 'photos') return `${baseURL}/${type}?per_page=${perPage}&_fields=title,slug,featured_media_src,featured_media,featured_media_srcset,link`
   if (query) return `${baseURL}/${type}?search=${query}&per_page=${perPage}&_fields=title,slug,featured_media_src,featured_media,featured_media_srcset,link&page=${index}`
   if (type === 'photos') return `${baseURL}/${type}?orderby=title&order=asc&per_page=${perPage}&_fields=title,slug,featured_media_src,featured_media,featured_media_srcset,link&page=${index}`
   return `${baseURL}/${type}?per_page=${perPage}&_fields=title,slug,featured_media_src,featured_media,featured_media_srcset,link&page=${index}`
}