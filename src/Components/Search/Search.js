import React from 'react'
import './Search.css'
import axios from 'axios'


function Search(setCharacters) {
    //create state to hold search input
    const [searchValue, setSearchValue] = React.useState("")

    const handleChange = (e) => {
        console.log(e)
        //store the input
        setSearchValue(e.target.value)
    }

    //https://rickandmortyapi.com/api/character/?name=rick

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue)
        //I need to call api to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(res =>{
            console.log(res.data.results)
            setCharacters(res.data.results)

            //clear textbox
            setSearchValue("")
        })
        .catch(err => {
 
            if (err.response.state === 404) {
                alert("no matching characters")
            }
            else{
                console.log(err)
            }
        })
    }

  return (
    <form className="search-container"
        onSubmit = {handleSubmit}>
        <input type="text" 
        onChange={handleChange}
        value = {searchValue}
        placeholder="Search all characters" />

    

    </form>
  )
}

export default Search