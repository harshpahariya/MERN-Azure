import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       thoughts: []
    }
  }

  componentDidMount() {
    axios.get('/api/thoughts').then(res => this.setState({thoughts: res.data})).catch(alert);
  }
  
  createThought = () => {
    const thought = prompt('Enter your thoughts: ');
    if(!thought) return;
    axios.post('/api/thoughts/create', {thought}).then(res => this.setState({thoughts: [...this.state.thoughts, res.data.newThought]}))
    .catch(err => alert('something went wrong'));
  }
  
  render() {
    const {thoughts} = this.state;
    console.log(thoughts);
    return (
      <div className='App'>
        <button onClick={this.createThought}>Create Thought</button>
        <ul>
          {
            thoughts.map(thoughtmodel => 
              <li style={{listStyleType:'none', margin:'20px', borderBottom:'2px solid'}} key={thoughtmodel._id}>
                {thoughtmodel.thought}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default App
