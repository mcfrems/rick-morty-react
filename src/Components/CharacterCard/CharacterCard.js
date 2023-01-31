import React from 'react'
import './CharacterCard.css'

function CharacterCard(props) {
  return (
    <div className='character-card'>
        <img src={character.image} />
        <p>{props.character.name}</p>
        <button>See Details</button>
    </div>
  )
}

export default CharacterCard