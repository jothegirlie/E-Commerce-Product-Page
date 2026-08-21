import React from "react"


const heartContext = React.createContext()


export default function Heart({children}){

    const [favorites,setFavorites] = React.useState([
      
    ])

    const total = favorites.length;

    function toggle(){
        setOn(prev => !prev)
    }

   

    return(
        <heartContext.Provider value={{favorites, setFavorites, toggle ,total}}>
            {children}
        </heartContext.Provider>
    )



}

export {heartContext}