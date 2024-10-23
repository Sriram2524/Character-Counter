import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterList from '../CharacterList'

import './index.css'

const initialDetails = []

class CharacterCounter extends Component {
  state = {input: '', characterList: initialDetails}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {input} = this.state
    const newCharacterList = {
      id: uuidv4(),
      name: input,
    }
    this.setState(preState => ({
      characterList: [...preState.characterList, newCharacterList],
      input: '',
    }))
  }

  render() {
    const {characterList, input} = this.state
    const characterListLength = characterList.length === 0
    return (
      <div className="bg-container">
        <div className="card">
          <div className="left-con">
            <div className="header">
              <h1 className="left-heading">
                Count the characters like a Boss....
              </h1>
            </div>
            {characterListLength ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="empty-img"
                alt="no user inputs"
              />
            ) : (
              <ul className="unordered-list">
                {characterList.map(each => (
                  <CharacterList eachCharacterItem={each} key={each.id} />
                ))}
              </ul>
            )}
          </div>
          <div className="right">
            <h1 className="right-heading">Character Counter</h1>
            <form onSubmit={this.onSubmit} className="form">
              <input
                className="input"
                placeholder="Enter the Characters here"
                type="text"
                value={input}
                onChange={this.onChangeInput}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
