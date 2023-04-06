import { useState } from 'react'

const Button = (props) => {
  const {handleClick, text} = props
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const AnecdoteDay = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
      <Button handleClick={props.voteClick} text={props.vote}/>
      <Button handleClick={props.aneClick} text={props.nextAne}/>
    </>
  )
}

const MostVotes = (props) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [most, setMost] = useState({mostIndex: 0, mostVotes: 0})

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] = copy[selected] +1
    setVotes(copy)
    if(copy[selected] > most.mostVotes){
      const newMost = {
        mostIndex: selected,
        mostVotes: copy[selected]
      }
      setMost(newMost)
    }
  }


  return (
    <div>
      <AnecdoteDay anecdote={anecdotes[selected]} votes={votes[selected]} voteClick={handleVoteClick} vote='vote' aneClick={() => setSelected(getRandomInt(8))} nextAne='next anecdote'/>
      <MostVotes anecdote={anecdotes[most.mostIndex]} votes={most.mostVotes}/>
    </div>
  )
}


export default App