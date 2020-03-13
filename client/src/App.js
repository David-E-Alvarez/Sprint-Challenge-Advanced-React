import React from 'react';
import './App.css';
import axios from "axios";
import Players from "./components/Players";
import {useColor} from "./hooks/useColor";

class App extends React.Component {
  state = {
    fifaData: [], 
    id: new Date()
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("res.data: ", res.data);
        this.setState({
          fifaData: res.data
        })
      })
  }
  render(){
    return (
      <div className="App">
        <h1 id="myH1">Womans World Cup Data</h1>
        {/* {document.body.getElementsByClassName("myH1").style.color = "yellow"}  */}
        {/* {console.log(document.body.getElementsByClassName("myH1"))} */}
        {document.body.style.backgroundColor = "yellow"}
        <Players key={this.state.fifaData} playersArray={this.state.fifaData}/>
      </div>
    );
  }
  
}

export default App;
