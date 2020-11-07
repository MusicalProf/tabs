import logo from "./logo.svg";
import Tab from "./components/Tab.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [tabs, setTabs] = useState([
    {
      selected: true,
      content: "Tab 1 content is showing here",
    },
    {
      selected: false,
      content: "Tab 2 content is showing here",
    },
    {
      selected: false,
      content: "Tab 3 content is showing here",
    },
  ]);

  const handleClick = (clickedIndex) => {
    console.log(`you clicked tab # ${clickedIndex}`);
    tabs.map((tab, i) => {
      let t = tab;
      if (clickedIndex === i) {
        t.selected = true;
      } else {
        t.selected = false;
      }
      setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="jumbotron bg-dark">
          Welcome! Below are some tabs showing different content
        </h1>
        {tabs.map((tab, i) => {
          return (
            <Tab selected={tab.selected} index={i} handleClick={handleClick} />
          );
        })}
      </header>
      <div class="border bg-secondary">
        {tabs.map((tab, i) => {
          return tab.selected ? <h4 className="display-1">{tab.content}</h4> : "";
        })}
      </div>
    </div>
  );
}

export default App;
