import React  from 'react';
import './Filter.css';

function Filter(props) {

    const { handlePrintType, handleBookType } = props; 

    
        return(
            <div className="filter_container">
                <form action=" " className="print_type_filter_form" onChange={e => handlePrintType(e.target.value)}>
                    <label htmlFor="print type">Print Type:</label>
                    <select name="print-type-filter">
                        <option value="All">
                            All
                        </option>
                        <option value="Books">
                            Books Only 
                        </option>
                        <option value="Magazines">
                            Magazines Only 
                        </option>
                    </select>
                </form>
                <form action="" className="book_type_filter_form" onChange={e => handleBookType(e.target.value)}>
                    <label htmlFor="book type">Book Type:</label>
                    <select name="book-type-filter">
                        <option value="eBooks">
                            All eBooks
                        </option>
                        <option value="Free-eBooks">
                            Free eBooks
                        </option>
                        <option value="Paid-eBooks">
                            Paid eBooks
                        </option>
                        <option value="Full">
                            Fully Available eBooks
                        </option>
                        <option value="Partial">
                            Partially Available eBooks
                        </option>
                    </select>
                </form>
            </div>
        )

}

export default Filter; 

//Explaining Code: 
/*
- Code displays 2 separate forms that a user can implement to filter out for a specific search 
- props is taken by handlePrintType & handleBookType to an event handler for each option depending on the filter

*/