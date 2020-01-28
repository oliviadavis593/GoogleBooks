import React from 'react';
import './Book.css';

function Book() {

    //If needed: args - props & props = book 

    let author; 
    let title; 
    let bookCover; 
    let previewUrl; 
    let description; 
    let cost; 


    return(
        <div className="book_container">
            <a href={ previewUrl } target="blank">
                <li className="book_li">
                    <img src={ bookCover} className="book_image" alt={`Cover of the book: ${title}`}></img>
                    <div className="book_info">
                        <h2 className="book_title">{ title }</h2>
                        <h3 className="book_author">{ author }</h3>
                        <div className="book_cost">{ cost }</div>
                        <p className="book_description">{ description }</p>
                    </div>
                </li>
            </a>
        </div>
    )
}

export default Book;