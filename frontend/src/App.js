import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import About from '../src/components/About/About'
import Home from '../src/components/Home/Home'
import Videos from '../src/components/Videos/Videos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchResults from './components/SearchResults'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/videos" exact element={<Videos/>} />
          {/* <Route path='/results' exact element={<SearchResults></SearchResults>}></Route> */}
          </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
