import React from 'react';
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search';
import Service from '../Service/Service';
const Home = () => {
    return (
        <>
       
      <Navbar></Navbar>
      <Search></Search>
      <Service></Service>
      <Footer></Footer>
        </>
    );
};

export default Home;