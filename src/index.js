import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SWRConfig } from 'swr'
import fetcher from './utils/fetcher'

ReactDOM.render(
   <React.StrictMode>
      <SWRConfig value={{ fetcher }}>
         <App />
      </SWRConfig>
   </React.StrictMode>,
   document.getElementById('root')
)

