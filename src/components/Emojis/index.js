const Emojis = props => {
  const {eachEmojiProp, changeUI} = props
  const {name, imageUrl} = eachEmojiProp

  const onCLickedonEmoji = () => {
    changeUI()
  }

  return (
    <li>
      <h1>{name}</h1>
      <img src={imageUrl} onClick={onCLickedonEmoji} alt={name} />
    </li>
  )
}

export default Emojis
