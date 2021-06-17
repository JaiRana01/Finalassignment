import React,{Component} from 'react';
import SCP from "./SCP.js";

class App extends Component
{
    render()
    {
      return(
        <SCP scp={ this.state.scp}/>

      );
    }
    state = { scp: []}

    componentDidMount()
    {
      fetch('https://finalassignment-4985.restdb.io/rest/content',
      {
        method: 'GET',
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60c8151be2c96c46a246354a",
          "content-type": "application/json"
        }
      })
      .then(result => result.json())
      .then((data) => { this.setState({scp: data})})

      .catch(console.log);
    }
   
}

export default App;
