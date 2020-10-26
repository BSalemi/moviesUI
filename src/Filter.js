import React from 'react';
import {useState} from 'react';

const Filter = (props) => {

    return(
        <input type="text" className="searchFilter" onChange={event => props.updateSearch(event)} placeholder="Search"/>
    )
}

export default Filter 