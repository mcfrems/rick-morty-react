import {useState, createContext, useEffect} from 'react'

//1 - create a blank context
export const ThemeContext = createContext(); 
//2 - assign a value
//3 - provide value to children
export default function ThemeContextProvider(props){
    //create my global state
    const [darkMode, setDarkMode] = useState(false)
    useEffect(
        ()=>{
            //get value from localStorage
            const theme = localStorage.getItem("darkMode")
            //cannot be null
            console.log(theme)
            if (theme != null){
                //all values in local storage are stored as a string
                setDarkMode(JSON.parse(theme))
            }
        },[]
    )

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}