import React from "react";
import "./App.css";
import data from "./data.json";
import search from "./search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group : "",
      results : []};
  }

  handleClick() {
    this.setState({group: search()[0], results: [search()[1]]});
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="title">Selections</div>
       

        <div className="App">
          {data.selections.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>

        <button type="button" className="block" onClick={() => this.handleClick()}>
          Click to find the Group with most matches. 
        </button>

        <div className="result">
          The Group with the maximum matches is  {this.state.group}
           &nbsp; with &nbsp; {this.state.results}.
        </div>
        <div className="title">Group A</div>
        <div className="groups">
          {data.groups.A.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>
        <div className="title">Group B</div>
        <div className="groups">
          {data.groups.B.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>
        <div className="title">Group C</div>
        <div className="groups">
          {data.groups.C.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>
        <div className="title">Group D</div>
        <div className="groups">
          {data.groups.D.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>
        <div className="title">Group E</div>
        <div className="groups">
          {data.groups.E.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>
        <div className="title">Group F</div>
        <div className="groups">
          {data.groups.F.map((el, index) => (
            <div className="selections" key={index}>
              <ul>{el}</ul>
            </div>
          ))}
        </div>
       

        
      </div>
    );
  }
}

export default App;
