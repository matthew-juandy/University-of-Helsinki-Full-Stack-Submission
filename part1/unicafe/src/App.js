import { useState } from 'react'

const Button = (props) => {
  const {handleClick, text} = props
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.perc}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if(props.all === 0){
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  
  return(
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.all}/>
        <StatisticLine text='average' value={props.avg}/>
        <StatisticLine text='positive' value={props.pos} perc='%'/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad;
  let avg = (good - bad)/all;
  let pos = (good/all) * 100;

  return (
    <div>
      <h1>give feedback</h1>  
      <Button handleClick={() => setGood(good+1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}/>

    </div>
  )
}

export default App