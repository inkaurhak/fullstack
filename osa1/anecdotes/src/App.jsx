import { useState } from 'react'

const MostVotes = (props) => {
  const max = Math.max(...props.points)
  if (max > 0) {
    const i = props.points.indexOf(max);
    const anecdote = props.anecdotes[i]
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdote}
        <div>
          has {props.points[i]} votes
        </div>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialPoints = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    initialPoints
  )

  const setNewSelected = newSelected => {
    if (newSelected >= anecdotes.length) {
      newSelected = 0
    }
    setSelected(newSelected)
  }

  const setNewPoint = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
        <div>
          has {points[selected]} votes
        </div>
      <div>
        <button onClick={() => setNewPoint(1)}>vote</button>
        <button onClick={() => setNewSelected(selected+1)}>next anecdote</button>
      </div>
      <MostVotes points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
