// Write your code here
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  changeBody = () => {
    const {navBarItem, changeState} = this.props
    const {name} = navBarItem
    changeState(name)
  }

  createAndAppen = () => {
    const {navBarItem, currentname} = this.props
    const {name, iconUrl} = navBarItem
    if (name === currentname) {
      return (
        <button
          className="list-logo-text extraClass"
          onClick={this.changeBody}
          type="button"
        >
          <img src={iconUrl} alt={name} className="image-icon" />
          <p className="icon-text">{name}</p>
        </button>
      )
    }
    return (
      <button>
        className="list-logo-text" onClick={this.changeBody}
        type="button" >
        <img src={iconUrl} alt={name} className="image-icon" />
        <p className="icon-text">{name}</p>
      </button>
    )
  }

  render() {
    return <div>{this.createAndAppen()}</div>
  }
}

export default NavBar
