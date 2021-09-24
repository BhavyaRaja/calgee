import React , { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import './App.css';

class App extends React.Component{
  render()
  {
    return (
    <>
    <Header/>
    <Navbar />
    <Content />
    <Footer/>
    </>
    )
    
  }
}

export default App;
