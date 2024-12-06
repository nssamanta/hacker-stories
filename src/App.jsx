/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import * as React from "react";

//const title = "React";
const welcome = {
  title: "React",
  greeting: "Hey",
};

const candies = ["Chocolate", "Gummies", "Candy Canes", "Tamarindo"];

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  //A: callback handler gets introduced as event handler
  const handleSearch = (event) => {
    //D: callback to the place it was introduced
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      {/* // B: passed as function in props to another component */}
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />

      <hr />
      <Candies />
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  /*let searchTerm = "";*/
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
   /* searchTerm = event.target.value;*/
    // synthetic event letter typed in
   /* console.log(event);*/
    //C:Is executed there as callback handler
    props.onSearch(event);
    // value of target (here: input HTML element)
    /*console.log(event.target.value);*/
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}> {props.item.title}</a>
    </span>
    <span> {props.item.author}</span>
    <span> {props.item.num_comments}</span>
    <span> {props.item.points}</span>
  </li>
);

const Candies = () => (
  <div>
    <ul>
      {candies.map((candy, index) => (
        <li key={index}>{candy} </li>
      ))}
    </ul>
  </div>
);

export default App;
