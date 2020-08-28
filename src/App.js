import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Archive from './components/Archive'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Page from './components/Page'
import SearchPage from './components/SearchPage'
import Single from './components/Single'
import SinglePhotos from './components/SinglePhotos'
import './styles/styles.scss'

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/our-story' component={Page} />
            <Route exact path='/travel-blog' component={Archive} />
            <Route path='/travel-blog/:slug' component={Single} />
            <Route exact path='/photography'>
               <Archive type={'photos'} />
            </Route>
            <Route path='/photography/:slug' component={SinglePhotos} />
            <Route path='/search' component={SearchPage}></Route>
            <Route exact path='/not-found' component={SearchPage}></Route>
            <Route path='*'>
               <Redirect to="/not-found" />
            </Route>
         </Switch>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
