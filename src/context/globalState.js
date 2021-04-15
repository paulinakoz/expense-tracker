import React, { createContext, useReducer} from 'react';
import AppReducer from './appReducer.js'

//Initial state
const initialState = {
    transactions: [
        {id: 1, description: 'Drinks', amount: -40},
        {id: 2, description: 'Salary', amount: +600},
        {id: 3, description: 'Dinner', amount: -70},
        {id: 4, description: 'Dog walkint', amount: +65}
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}