import React, {useContext} from 'react'
import BookDetails from './BookDetails'
import {BookContext} from '../context/BookContext'


const BookList = () => {
    const {Books} = useContext(BookContext)
    console.log({Books})
    return Books.length ? (
                <div className="book-list">
                    <ul>
                        {Books.map(book => {
                            return(
                                <BookDetails book={book} key={book.id} /> 
                            )
                        })}
                    </ul>
                </div>
            ): (
        <div className="empty">youve got no books left</div>
    )
}

export default BookList