import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from './components/footer';
import Header from './components/header';
import Home from "./components/home";
import Product from "./components/product";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/products" component={Product} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;