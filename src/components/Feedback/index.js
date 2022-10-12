// Write your React code here.
import {Component} from 'react'
import Emoji from '../Emoji'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackFilled: true}

  onClickButton = () => {
    this.setState({
      isFeedbackFilled: false,
    })
  }

  render() {
    const {isFeedbackFilled} = this.state
    const {resources} = this.props
    console.log(resources.emojis)
    return (
      <div className="bg-cont">
        <div className="card">
          {isFeedbackFilled ? (
            <div>
              <h1 className="main-head">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-container">
                {resources.emojis.map(each => (
                  <Emoji
                    emojiContent={each}
                    button={this.onClickButton}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <img
                src={resources.loveEmojiUrl}
                alt="love emoji"
                className="love-emoji"
              />
              <h1 className="head">Thank You!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
