import React from 'react'

import Message from './message'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
      data: [],
    }

    this.changeText = this.changeText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({data: this.state.data.concat(this.state.message)})
  }

  changeText(e) {
    this.setState({message: e.target.value})
  }

  render() {
    return(
      <div>
        <form>
          <input onChange={this.changeText} type='text' />
          <button
            onClick={this.handleClick}
          >
            そーしんっ！
          </button>
          {this.state.data.map((message, idx) => <Message message={message} key={idx} />)}
        </form>
      </div>
    )
  }
}

export default Form
