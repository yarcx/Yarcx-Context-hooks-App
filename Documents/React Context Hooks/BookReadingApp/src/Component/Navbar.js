import React, { useContext} from 'react'
import {BookContext} from '../context/BookContext'


const Navbar = () => {
    const {Books} = useContext(BookContext)
    console.log(Books);
    
    return(
        <nav className="navbar">
             <h1>Yarcx Books To Read Application </h1>
            <p>You have {Books.length} more books to read</p> 
        </nav>
    )
}

export default Navbar