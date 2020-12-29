import React from 'react'
import './FontCard.css'

const FontCards = ({ filterText, customText, fonts }) => {
  const filteredCards = fonts.filter((font) =>
    font.family.toLocaleLowerCase().includes(filterText)
  )

  const cardsToShow = filterText ? filteredCards : fonts

  return cardsToShow.map((card) => (
    <div className="card" key={card.family}>
      <div className="font-info">
        <h1 className="font-name">{card.family}</h1>
      </div>
      <style>@import url({`https://fonts.googleapis.com/css?family=${card.family}&display=swap`})</style>  
      <p className="sample-text" style={{ fontFamily: card.family }}>
        {!customText
          ? `“If cats looked like frogs we'd realize what nasty, cruel little bastards they are.
          Style. That's what people remember.”
          
          ― Terry Pratchett, Lords and Ladies`
          : customText}
      </p>
    </div>
  ))
}

export default FontCards
