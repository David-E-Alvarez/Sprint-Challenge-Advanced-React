import React from 'react';
import './App.css';
import axios from "axios";
import Players from "./components/Players";

class App extends React.Component {
  state = {
    fifaData: [], 
    id: new Date()
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        // console.log("res.data: ", res.data);
        this.setState({
          fifaData: res.data
        })
      })
  }
  render(){
    return (
      <div className="App">
        
        {/* {document.body.getElementsByClassName("myH1").style.color = "yellow"}  */}
        {/* {console.log(document.body.getElementsByClassName("myH1"))} */}
        {/* {document.body.style.backgroundColor = "yellow"} */}
        <Players key={this.state.fifaData} playersArray={this.state.fifaData}/>
      </div>
    );
  }
  
}

export default App;
