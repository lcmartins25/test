import React, { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import moment from 'moment'

const Comments = ({ id }) => {
   const { data: comments, error } = useSWR(
      `http://www.ourglobaltrek.com/wp-json/wp/v2/comments?post=${id}`,
      (...args) => axios(...args).then((res) => res.data)
   )

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [content, setContent] = useState('')
   const [posted, setPosted] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()

      axios.post('http://www.ourglobaltrek.com/wp-json/wp/v2/comments', {
         post: id,
         author_name: name,
         author_email: email,
         content
      }).then(() => {
         setName('')
         setEmail('')
         setContent('')
      })
      setPosted(true)
   }

   if (error) return <h1>Something went wrong!</h1>
   return (
      <div className="container__comments">
         {comments && comments.length > 0 && <h1 className="center section-header">Comments</h1>}
         {comments && comments.map((comment) => (
            <div key={comment.id} className="comment">
               <h3>{comment.author_name}</h3>
               <span>{moment(comment.date).format("MMM DD, YYYY")}</span>
               <p dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></p>
            </div>
         ))}
         <h1 className="section-header center">Leave a Comment</h1>
         {posted && <h3 className="container__comments center">Thank you! Your comment was submitted and we will review it soon.</h3>}
         {!posted && <form className="container__comments__form" action="" onSubmit={handleSubmit}>
            <div className='newsletter--field'>
               <input className='comment--input comment--input__label' type="text" value={name} placeholder=' ' required onChange={(e) => setName(e.target.value)} />
               <label htmlFor="">Name</label>
            </div>
            <div className='newsletter--field'>
               <input className='comment--input comment--input__label comment--input__email' type="email" value={email} placeholder=' ' required onChange={(e) => setEmail(e.target.value)} />
               <label htmlFor="">Email</label>
            </div>
            <div className='comment--input__message'>
               <span className='comment--input' contentEditable value={content} onChange={(e) => setContent(e.target.value)}></span>
               <label htmlFor="">Comment</label>
            </div>
            <input className="button" type="submit" />
         </form>}
      </div>
   )
}

export default Comments


// <textarea className="newsletter--input comment--input" placeholder=' '></textarea>