// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameHidden: true,
    isLastNameHidden: true,
  }

  onClickShowOrHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameHidden: !prevState.isFirstNameHidden,
    }))
  }

  onClickShowOrHideLastName = () => {
    this.setState(prevState => ({
      isLastNameHidden: !prevState.isLastNameHidden,
    }))
  }

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state
    return (
      <div className="show-hide-app-container">
        <h1 className="show-hide-app-heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              onClick={this.onClickShowOrHideFirstName}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {!isFirstNameHidden && <p className="show-hide-name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="show-hide-button"
              onClick={this.onClickShowOrHideLastName}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {!isLastNameHidden && <p className="show-hide-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
