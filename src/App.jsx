import React, { Component } from 'react';
import TeamFormation from "./components/TeamFormation/TeamFormation.jsx";
import observableData from "./data-providers/lineups.js";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      formation:{}
    };
  }

  componentDidMount() {
    //subscribing to the data stream
    observableData.subscribe({
      next: data=>{
        //whenever there's new data we update the app state
        this.setState({formation:data})
      },
      error: err => console.error('something wrong occurred: ' + err)
    })
  }
  

  render() {
    return (
      <TeamFormation {...this.state.formation}></TeamFormation>     
    );
  }
}
export default App;
