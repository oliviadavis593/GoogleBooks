import React,  { Component } from 'react';
import './Filter.css';

class Filter extends Component {
    render() {
        return(
            <form>
                <form>
                    <label htmlFor="printType">Print Type:</label>
                    <select
                    id="printType"
                    name="printType"
                    >
                    <option value="All">All</option>
                    </select>
                    <label htmlFor="bookType">Book Type:</label>
                    <select
                    id="bookType"
                    name="bookType"
                    >
                    <option value="No Filter">No Filter</option>
                    </select>
                </form>
            </form>
        )
    }
}

export default Filter; 