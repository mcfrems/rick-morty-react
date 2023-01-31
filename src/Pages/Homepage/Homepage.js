import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Homepage.css'
import CharacterCard from '../../Components/CharacterCard/CharacterCard';

function Homepage() {

    //create state for characters
    const [characters, setCharacters] = useState([])


    useEffect(
        ()=>{
            //console.log("Homepage loaded");
            axios.get("https://rickandmortyapi.com/api/character")
            .then(res=> (
                console.log(res.data.results);
                setCharacters(res.data.results);
            ))
            .catch(err => console.log(err))

        },[]

    )//end useEffect

  return (
    <div className='Home-container'>
        <div className='Characters-container'>
        <h1>Main Characters</h1>
        {
            characters.map(item=><p><CharacterCard
                            character={item} /></p>
            )
        }
        </div>
    </div>
  )
}

export default Homepage