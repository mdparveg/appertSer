import React from 'react';
import {Form} from 'react-bootstrap';
import './Search.css'
const Search = () => {
    return (
        <>   
            <div className="image">
                <div className="banner-bg">

               
          
        <div style={{paddingTop:"300px", textAlign:"center",paddingLeft:"400px"}}>
        <h1 className="search_heading">Find Your House Rent</h1>

            <input type="text" placeholder="Search" className="mr-sm-2 search_input"/>
            <button className="search_btn btn">Find now</button>
    </div>
    </div>
        </div>
        </>
     
    );
};

export default Search;