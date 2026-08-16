import React from "react"


const heartContext = React.createContext()


export default function Heart({children}){

    const [on,setOn] = React.useState(false)
    const [favorites,setFavorites] = React.useState([])

    function addFav(id) {
        setFavorites((prev) => {
            if (prev.includes(id)) {
                return prev.filter((fav) => fav !== id);
    }
    return [...prev, id];
  });
}

    return(
        <heartContext.Provider value={{addFav,favorites}}>
            {children}
        </heartContext.Provider>
    )



}

export {heartContext}