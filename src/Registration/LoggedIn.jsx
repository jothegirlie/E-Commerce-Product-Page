import React from "react"

const loggedInContext = React.createContext()

export default function LoggedIn({children}){


    const [loggedIn, setIsLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState({});


    return(
        <loggedInContext.Provider value={{loggedIn, setIsLoggedIn,user,setUser}}>
            {children}
        </loggedInContext.Provider>
    )

}

export {loggedInContext}