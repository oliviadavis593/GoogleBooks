import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return(
           <form>
               <label htmlFor="Search">Search</label>
               <input 
               id="search"
               name="search"
               type="text"
               placeholder="The Tipping Point"
               />
               <button className="search__button">
                    Search
               </button>
           </form>
        )
    }
}

export default Search; 