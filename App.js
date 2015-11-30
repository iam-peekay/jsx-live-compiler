import React from 'react';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      input: '/* Enter jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  update (e) {
      let code = e.target.value;
      try {
        this.setState({
          output: babel.transform(code, {
            stage: 0,
            loose: 'all',
          }).code,
          err: ''
        })
      } catch (err) {
        this.setState({err: err.message})
      }
  }
  render () {
    return (
      <div>
        <header className="center">
          Enter your jsx in the left input box to see the compiled jsx on the right
        </header>
        <span className="error"> { this.state.err} </span>
          <div className="container">
            <textarea
              onChange={this.update}
              defaultValue={this.state.input}>
            </textarea>
            <pre>
              {this.state.output}
            </pre>
          </div>
      </div>
    )
  }
}

export default App
