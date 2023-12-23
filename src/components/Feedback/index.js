// Write your React code here.
import {Component} from 'react'
import Emojis from '../Emojis/index'

class Feedback extends Component {
  state = {value: false}

  changeUI = () => {
    this.setState({value: true})
  }

  renderAuth = () => {
    const {value} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (value) {
      return (
        <div>
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You</h1>
          <p>We will use your feedback</p>
        </div>
      )
    }
    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul>
          {emojis.map(eachEmoji => (
            <Emojis
              eachEmojiProp={eachEmoji}
              key={eachEmoji.id}
              changeUI={this.changeUI}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div>
        <div>{this.renderAuth()}</div>
      </div>
    )
  }
}

export default Feedback
