import React from "react"
import './App.css';

const navbar = new URL("./assets/landing/Nav Bar_landing page.png", import.meta.url)
const createButton = new URL("./assets/landing/Create event button.png", import.meta.url)

const productLeft = new URL("./assets/landing/Product Image _ Left.png", import.meta.url)
const productMiddle = new URL("./assets/landing/Product Image _ Middle.png", import.meta.url)
const productRight = new URL("./assets/landing/Product Image _ Right.png", import.meta.url)

function App() {
  return (
    <div className="App">
      <img className="navbar" src={navbar}/>
      <div>
        <text id="title">Facebook events <br/> without Facebook.</text>
        <br/>
        <text id="desc">Easily host and share events with your <br/> friends across any social media.</text>
      </div>
      <img className="createButton" src={createButton}/>
      <div className="productImages">
        <img className="productLeft" src={productLeft}/>
        <img className="productMiddle" src={productMiddle}/>
        <img className="productRight" src={productRight}/>
      </div>
    </div>
  );
}

export default App;
