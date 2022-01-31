import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import Publications from "./components/publications/Publications";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Publications/>
      <Contact/>

    
    </div>
  );
};

export default App;