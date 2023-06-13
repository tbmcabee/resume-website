import { useState } from "react";
import NavTab from "./components/navTab";

function App() {

  let tabs = ["Home", "About", "Projects", "Experience"]
  return (
    <div>
      <h1 className="text-center">My Resume Website</h1>
      <NavTab tabs={tabs}/>
    </div>
  );
}

export default App;
