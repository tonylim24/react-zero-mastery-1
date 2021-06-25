import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // Any custom function/method that we created must be bound through the constructor.
    // Note that if we use arrow functions, we do not need to bind through constructor (Lexical scoping)!
    // Therefore if we comment this code below, it will still work just fine!
    this.handleChange = this.handleChange.bind(this);
  }

  // Use componentDidMount lifecycle method to get API data
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response));
    //fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => console.log(users));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState(
      { searchField: e.target.value },
      console.log("searchField: ", this.searchField)
    );
  };

  render() {
    // Immutability, create a copy of monsters and searchfield from state and store it in const.
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters ..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
          {/* Anything declared inside the component is considered as "children" and could be accessed via props.children */}
        </CardList>
      </div>
    );
  }
}

export default App;

// Lesson42
