import React, {useContext} from 'react'
import './CharacterDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';


function CharacterDetails() {
    //extract theme values
    const {darkMode, setDarkMode} = useContext(ThemeContext)
   
    //I need the id from the url
    const {id} = useParams();

    //create state for character data
    const [character, setCharacter] = React.useState()

    React.useEffect(
        ()=>{
            //call api to get info on this character
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                console.log(res.data)
                setCharacter(res.data)
            })
            .catch(err => console.log(err))
        },[]
    )

  return (
    <div className={darkMode?'details-container details-dark' : 'details-container' }>
        <img src={character?.image}/>
        <div className="char-info">
            <h3>{character?.name}</h3>
            <ul>
                <li>{character?.gender}</li>
                <li>{character?.species}</li>
                <li>{character?.status}</li>
            </ul>
        </div>
    </div>
  )
}

export default CharacterDetails