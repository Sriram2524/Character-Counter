import './index.css'

const CharacterList = props => {
  const {eachCharacterItem} = props
  const {name} = eachCharacterItem

  return (
    <li className="list">
      <p className="para">
        {name}: {name.length}
      </p>
    </li>
  )
}
export default CharacterList
