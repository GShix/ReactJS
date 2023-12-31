
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import UseEffect from './Pages/UseEffect/UseEffect'
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/UseEffect" element = {<UseEffect/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
