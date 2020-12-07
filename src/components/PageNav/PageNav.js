import React from 'react'
import './PageNav.css'

const PageNav = ({ customText, setCustomText }) => {
  return (
    <nav id="major-nav">
      <label htmlFor="search">Search fonts</label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search fonts"
      />
      <label htmlFor="custom-text">Enter text</label>
      <input
        type="text"
        name="custom-text"
        id="custom-text"
        placeholder="Type something"
        value={customText}
        onChange={setCustomText}
      />
      <label htmlFor="font-sizes"></label>
      <select id="font-sizes">
        <option value="26px">26px</option>
        <option value="28px">28px</option>
        <option value="30px">30px</option>
        <option value="32px">32px</option>
      </select>
      <div id="darkmode">
        <button className="darkmode-button" id="dark" type="button"></button>
        <button className="darkmode-button" id="light" type="button"></button>
      </div>
      <button id="list-mode" className="fas fa-list" type="button"></button>
      <button id="reset" className="fas fa-redo" type="button"></button>
    </nav>
  )
}

export default PageNav
