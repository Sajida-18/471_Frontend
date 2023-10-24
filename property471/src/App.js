//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Hello from './Components/Hello';
import axios from 'axios';

class App  extends React.Component {

  state = {details: [],}

  componentDidMount() {
    let data;
    axios.get('http://127.0.0.1:8000/hello_world_function/first_function_url')

      .then(res => {
        data = res.data;
        this.setState({
          details: data

        });
      })
      .catch(err => { })
  }

  render() {
    return(
      <div>
        <Hello />
        <header>the data that i got</header>
        <hr />
        {this.state.details.map((out) => (
          <div>
            {out.hello} <br />
            {out.world} <br />
            
            <br /><br />
          </div>
        ))}
      </div>
    )
  }

}

export default App;
