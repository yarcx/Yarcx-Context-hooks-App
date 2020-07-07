import  React, { createContext, useReducer, useEffect} from 'react';
import {bookReducer} from '../Bookreducers/bookReducer';

export const BookContext = createContext()


const BookContextProvider = (props) => {
    const [Books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('Books')
        return localData ? JSON.parse(localData) : []
    })
    useEffect(()=> {
        localStorage.setItem('Books', JSON.stringify(Books))
    }, [Books])
    return (
        <BookContext.Provider value={{Books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider