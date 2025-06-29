import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [User, setUser] = useState(null);

    const value = {
        User, setUser
    }
    return  (
        <AppContext.Provider value={value}>
        {props.children}

        </AppContext.Provider>
    )
}

export default AppContextProvider