import React from 'react';
import TextField from './components/TextField';
import Cities from './components/cities';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      terms: ""
    }
  }

  handeleChange = e => {
    this.setState({ terms: e.target.value })
    fetch(`https://indian-cities-api-nocbegfhqg.now.sh/cities?District=${this.state.terms}`)
      .then(response => response.json()).then(res => this.setState({ terms: res }))
  }

  handeleSubmit = e => {

  }

  render() {
    console.log(this.state.terms)
    return (
      <div className="container mt-5">
        {/* <TextField type={'text'} name={'terms'} value={state.terms} onChange={handeleChange} placeholder={'Search City,State & District'} />
        <h2 className="text-center">Indian Cities</h2>
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control" onChange={this.handeleChange} />
          </div>
        </form> */}
        <Cities />
      </div>
    );
  }
}

export default App;
