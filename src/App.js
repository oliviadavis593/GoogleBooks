import React, { Component } from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import './App.css';

export default class App extends Component {
  

  render() {
    return(
      <>
      <header className="App-header">
        <h1>Google Books Search</h1>
      </header>
      <main>
        <Search />
        <Filter />
      </main>
      </>
    )
  }
}