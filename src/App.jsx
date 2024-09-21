import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mainbody from './Componets/Mainbody'

import Jewelry from './Products/Jewelry'
import Art_panel from './Products/Art_panel'
import Keychains from './Products/Keychains'
import Clock from './Products/Clock'
import Candle from './Products/Candle'
import Photo_Frame from './Products/Photo_Frame'
import Phone_case from './Products/Phone_case'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'
import SellerPanal from './Componets/SellerPanal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SellerPanal/> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Mainbody />
          </Route>
          <Route path='/jewelry'>
            <Jewelry />
          </Route>
          <Route path='/art-panels'>
            <Art_panel />
          </Route>
          <Route path='/keychains'>
            <Keychains />
          </Route>
          <Route path='/clocks'>
            <Clock />
          </Route>
          <Route path='/candle-holders'>
            <Candle />
          </Route>
          <Route path='/photo-frames'>
            <Photo_Frame />
          </Route>
          <Route path='/phone-cases'>
            <Phone_case />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
