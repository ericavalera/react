import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  return(
    <>
  <Greeting />
  <ProductInfo />
  </>
)

}

export default App;