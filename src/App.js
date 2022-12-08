import { Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Product from "./components/product";

function App() {
  return (
    <>
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/products" component={Product} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
