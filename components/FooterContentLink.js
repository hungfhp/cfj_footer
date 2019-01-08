import React, { Component } from 'react'

export default class FooterContentLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iconVisibility: 'hidden'
    }
  }
  showIcon = () => {
    this.setState({
      iconVisibility: 'unset'
    })
  }
  hideIcon = () => {
    this.setState({
      iconVisibility: 'hidden'
    })
  }
  render() {
    return (
      <div onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}>
        <i className={this.props.icon} style={{ visibility: this.state.iconVisibility }} />
        <a href={this.props.href}>{this.props.text}</a>
      </div>
    )
  }
}
