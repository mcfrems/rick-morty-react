import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Homepage.css'
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import Search from '../../Components/Search/Search';


function Homepage() {

    //create state for characters
    const [characters, setCharacters] = useState([])

    useEffect(
        ()=>{
            // console.log("Homepage loaded");
            axios.get("https://rickandmortyapi.com/api/character")
            .then(res=> {
                console.log(res.data.results)
                setCharacters(res.data.results)
            })
            .catch(err => console.log(err))

        },[]

    )//end useEffect

  return (
    <div className='Home-container'>
        <Search setCharacters={setCharacters}/>
        <h1>Main Characters</h1>
        <div className='Characters-container'>
        {
            characters.map(item=><CharacterCard 
                            key={item.id}
                            character={item}/>
            )
            // characters.map(item=><p><CharacterCard
            //                 character={item.name} /></p>
            // )
        }
        </div>
    </div>
  )
}

export default Homepage