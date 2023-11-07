// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: false}

  buttonClicked = () => {
    this.setState(prevState => ({
      mode: !prevState.mode,
    }))
  }

  render() {
    const {mode} = this.state
    const boxClass = mode ? 'white-box' : 'black-box'
    const buttonText = mode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="container">
        <div className={`box ${boxClass}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.buttonClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
