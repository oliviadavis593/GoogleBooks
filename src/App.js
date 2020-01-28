import React, { Component } from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import BookList from './BookList/BookList';
import './App.css';

export default class App extends Component {
  state = {
    bookResults: this.props.initalBookResults, 
    searchQuery: 'the+tipping+point',
    bookFilter: '',
    printFilter: ''
  }

  handleSearchSubmit = ( searchSubmitEvent, searchInput) => {
    searchSubmitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput
    });
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const key = 'AIzaSyDhM9nZNFqqUwFlAAyqcc6xg8dQnZbDC8Y';
    const formattedSearchUrl = this.formatQuery( baseUrl, searchInput, key)
    fetch( formattedSearchUrl )
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong. Try again later!')
        }
        return response; 
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          bookResults: data, 
          error: null 
        })
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  formatQuery = ( baseUrl, searchInput, key ) => {
    const { bookFilter, printFilter } = this.state; 
    let formattedQuery; 
    if( searchInput !== '') {
      formattedQuery = '?q=' + searchInput; 
    }
    if( bookFilter !== '') {
      formattedQuery = formattedQuery + '&filter=' + bookFilter; 
    }
    if( printFilter !== '') {
      formattedQuery = formattedQuery + '&bookType=' + printFilter; 
    }
    const formattedUrl = baseUrl + formattedQuery + '&key=' + key; 
    console.log('formatted URL:', formattedUrl);
    return formattedUrl; 
  }

  handlePrintType = ( printTypeFormEvent ) => {
    if( printTypeFormEvent ) {
      this.setState({
        printFilter: printTypeFormEvent
      });
    }
  }

  handleBookType = ( bookTypeFormEvent ) => {
    if( bookTypeFormEvent ) {
      this.setState({
        bookFilter: bookTypeFormEvent
      });
    }
  }

  render() {
    const { bookResults } = this.state; 

    return(
      <>
      <header className="App-header">
        <h1>Google Books Search</h1>
      </header>
      <main>
        <Search 
        handleSearchSubmit={ this.handleSearchSubmit }
        />
        <Filter 
        handlePrintType={ this.handlePrintType }
        handleBookType={ this.handleBookType}
        />
        <BookList 
        bookResults={ bookResults }
        />
      </main>
      </>
    )
  }
}