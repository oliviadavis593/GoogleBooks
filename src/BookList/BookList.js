import React from 'react';
import './BookList.css'; 
import Book from '../Book/Book';

function BookList(props) {
    const { bookResults } = props; 
    const listOfBooks = bookResults.items.map((book, index) => <Book book={book} key={index}/>)

    return(
        <>
        <section className="bookList_container">
            <ul>
                { listOfBooks }
            </ul>
        </section>
        </>
    )
}

export default BookList; 