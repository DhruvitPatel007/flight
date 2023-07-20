import { useEffect, useState } from 'react';
import Head from 'next/head';


// Dhruvit

import "../styles/globals.css";
import "../styles/tab.css";
import "../styles/mobile.css";
import "../styles/services.css";
import "../styles/pranam.css";
import "../styles/Book.css";
import "../styles/success.css";
import "../styles/Searchbar1.css";

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Navfoot from '@/components/NavFooter';

export default function App({ Component, pageProps }) {
  const [darkTheme,setDarkTheme] = useState(false);

  useEffect(()=>{
  },[darkTheme])

  return <>
    <Head>
      <title>Trendy Shop</title>
    </Head>
    
      <Nav />
      <Component {...pageProps} darkTheme={darkTheme}/>
      <Footer />
      <Navfoot/>
  </>
}
