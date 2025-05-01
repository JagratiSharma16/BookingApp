import { createContext } from "react";
import { halls } from "../assets/assets_frontend/assets";
import React from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const currency = '$' 
    const value = {
        halls,currency
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
