import React from 'react';
import './Book.css';

function Book(props) {
    return(
        <div className="book">
            <div className="book__row">
                <div className="book__title">
                    {props.title}
                </div>
                <div className="book__author">
                    {props.author}
                </div>
                <div className="book__description">
                    {props.description}
                </div>
                <div className="book__image">
                    <a href={props.image}></a>
                </div>
            </div>
        </div>
    )
}

export default Book;