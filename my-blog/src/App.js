import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>{/*This is for choosing the first route without displaying the others*/}
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage}/>
            <Route component={NotFoundPage} exact/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
