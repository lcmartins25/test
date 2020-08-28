import React from 'react'
import moment from 'moment'

const Footer = props => (
   <div className="footer">
      <div>© 2013 - {moment().year()} ourglobaltrek</div>
      <div className="social">
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

   </div>

)

export default Footer