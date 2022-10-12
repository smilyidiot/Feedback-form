import './index.css'

const Emoji = props => {
  const {emojiContent, button} = props
  const {name, imageUrl} = emojiContent

  return (
    <li className="click-emoji">
      <img src={imageUrl} alt={name} onClick={button} className="emoji" />
      <p>{name}</p>
    </li>
  )
}

export default Emoji
