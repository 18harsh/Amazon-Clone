import React, { createContext, useContext, useReducer } from "react";


// Prepare DataLayer
export const StateContext = createContext();


// wrap our app and provide Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);