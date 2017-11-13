import React, { Component } from 'react';
import MainContent from './Components/MainContent.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Nav from './Components/Nav.js';
import BlogPostItem from './Components/BlogPostItem.js';
import BlogPosts from './Components/BlogPosts.js';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state ={
      maincontents: []
    }
  }
  // {/*this would typically be an ajax call or something*/}
  componentWillMount(){
    this.setState({maincontents: [
      {
        title: 'Blog post 1',
        date: '11/12/2017',
        body: 'Cat ipsum dolor sit amet, relentlessly pursues moth meow meow'
      },
      {
        title: 'Blog post 2',
        date: '11/13/2017',
        body: 'Cat ipsum dolor sit amet, relentlessly pursues moth meow meow'
      },
      {
        title: 'Blog post 3',
        date: '11/14/2017',
        body: 'Cat ipsum dolor sit amet, relentlessly pursues moth meow meow'
      }
    ]});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent maincontents = {this.state.maincontents}/>
        <Nav/>
        <Footer />
      </div>
    );
  }
}

export default App;
