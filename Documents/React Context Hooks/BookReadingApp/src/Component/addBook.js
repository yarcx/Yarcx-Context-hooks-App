import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

const AddBook = () => {
    const {dispatch} = useContext(BookContext)
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log(Title)
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value)
        console.log(Author)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {Title, Author}})
        setTitle('')
        setAuthor('')
    }
    return(
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" name="author"
            placeholder="Author"
            value={Author} onChange={handleAuthor} required/>
            <input type="text" name="Title" 
            placeholder="Title"
             value={Title} onChange={handleTitle} required/>
            <input type="submit" value="Add Book"/>
        </form>
    ) 
}

export default AddBook