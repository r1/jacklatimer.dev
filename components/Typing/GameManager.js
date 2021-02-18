import React from 'react'
import Game from './Game'
import { texts } from '@/data/Words'

export default class GameManager extends React.Component {
  state = {
    textObj: null
  }
  componentDidMount () {
    const keys = Object.keys(texts)

    this.setState({
      textObj: texts[keys[parseInt(keys.length * Math.random(), 10)]]
    })
  }
  render () {
    const { textObj } = this.state
    if (textObj) {
      return (
        <Game
          text={textObj.text}
          sourceName={textObj.name}
          sourceUrl={textObj.url}
        />
      )
    } else {
      return <p>Game is loading...</p>
    }
  }
}
