import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  if(props.text == "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </tr>
    )
  } 
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if(props.all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value ={props.good}/>
        <StatisticLine text="neutral" value ={props.neutral}/>
        <StatisticLine text="bad" value ={props.bad}/>
        <StatisticLine text="all" value ={props.all}/>
        <StatisticLine text="average" value ={(props.good-props.bad)/props.all}/>
        <StatisticLine text="positive" value ={props.good/props.all*100}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <h2>statistics</h2>
      <Statistics all={allClicks} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App