import React from "react";
import ReactDOM from "react-dom";
import Mermaid from "../lib/mermaid";

const example = `
flowchart TD
  Raj --- Audrey
  Rose --- Audrey
  Toni --- Daniel
  Ted --- Daniel
  Daniel --- Uma
  Audrey --- Uma
  subgraph Roy Greenfeld
    Daniel
    Audrey
  end
`;

function App() {
  return (
    <div className="App">
      <h1>React Mermaid Example</h1>
      <Mermaid chart={example} />
    </div>
  );
}

export default function Orgchart() {
  return (
    <div className="App">
      <h1>React Mermaid Example</h1>
      <Mermaid chart={example} />
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
