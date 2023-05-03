
import React from "react";
import ReactDOM from "react-dom/client"
import "./app.css"
import Index from "./Index";


const root= document.getElementById("root")

// Created an component named app which contains all other components and rendered this component to the root element
const App=()=>(
    <div className="app">
      
          <Index/>
    </div>
  
)
const rootElement=ReactDOM.createRoot(root);
rootElement.render(<App/>)
