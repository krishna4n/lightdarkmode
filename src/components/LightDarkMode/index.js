import {Component} from 'react'
import './index.css'

class Mode extends Component {
  state = {mode: 'dark', box: 'box', buttonTxt: 'Light Mode'}

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'dark') {
      this.setState({
        box: 'dark-box',
        mode: 'light',
        buttonTxt: 'Dark Mode',
      })
    } else {
      this.setState({
        box: 'box',
        mode: 'dark',
        buttonTxt: 'Light Mode',
      })
    }
  }

  render() {
    const {box, buttonTxt} = this.state

    return (
      <div className="container">
        <div className={box}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}
export default Mode
