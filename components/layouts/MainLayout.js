import React from 'react';
import Head from 'next/head';
import Header from '../includes/Header';
import Footer from '../includes/Footer';

const MainLayout = (props) => {
  
  return (
    <>
      <Head>
        <title>{props.pageTitle || 'E-commerce'  }</title>
        <link href="https://fonts.googleapis.com/css?family=Overlock:400,700|Roboto:300,400,500,700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" /> 
      </Head>
      <Header />
      <main>
        <div className="container">
          { props.children }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;

