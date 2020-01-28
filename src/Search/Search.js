import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = {
        searchInput: ''
    }

    handleSearchInput = ( searchEvent ) => {
        this.setState({
            searchInput: searchEvent.target.value
        })
    }

    render() {
        const { handleSearchSubmit } = this.props;
        const { searchInput } = this.state; 
        return(
           <div className="search_container">
               <form className="searchBar_form" 
               onSubmit={submitEvent => handleSearchSubmit(submitEvent, searchInput)}
               >
                <label htmlFor="search">Search: </label>
                <input 
                className="search_input"
                type="text"
                placeholder="The Tipping Point"
                name="search"
                onChange={this.handleSearchInput}
                />
                <button type="submit" className="search_submit_button">
                    Submit
                </button>
               </form>
           </div>
        )
    }
}

export default Search; 