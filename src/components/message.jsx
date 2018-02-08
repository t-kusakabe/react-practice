import React from 'react'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  render() {
    return(
      <div>
        {this.props.message}
      </div>
    )
  }
}

export default Message
