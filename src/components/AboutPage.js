import React, { Component } from 'react'

export default class AboutPage extends Component {
    onClick =() =>{
        const {history} = this.props
        history.goBack()
        // history.go(-1)
        // history.goForward()
    }
  render() {
    return (
      <div>
        <h2>About</h2>
        <button onClick={this.onClick}>go back</button>
      </div>
    )
  }
}
