import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FontCard from './components/FontCard/FontCard'
import Footer from './components/Footer/Footer'
import HeaderNav from './components/HeaderNav/HeaderNav'
import PageNav from './components/PageNav/PageNav'

function App() {
  const [customText, setCustomText] = useState([])

  return (
    <>
      <body>
        <HeaderNav />

        <main>
          <PageNav />

          <div id="content">
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
          </div>
        </main>

        <Footer />
      </body>
      <script src="brains.js"></script>
    </>
  )
}

export default App
