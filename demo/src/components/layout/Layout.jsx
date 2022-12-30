import React from 'react';
import Footer from '../layout/Footer/Footer';
import Navbar from '../layout/Navbar/Navbar';

const Layout = ({children}) => {
  return (

 <>
 <Navbar />
 {children}
 <Footer />
 
 </>
  );
};

export default Layout;

