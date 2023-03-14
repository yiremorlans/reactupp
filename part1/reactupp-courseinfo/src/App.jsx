import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  // need a variable to hold the total number of clicks
  const total = good + neutral + bad
  // need a variable to hold the average when good = 1, neutral = 0, bad = -1
  const average = ((good - bad) / total).toFixed(2)
  // need a variable to hold the percentage of good clicks
  const goodPercentage = ((good / total) * 100).toFixed(2)

  return (
    <div>
			<h1>Give feedback</h1>
            <div className='buttons'>
                <Button handleClick={handleGoodClick} text='Good' />
                <Button handleClick={handleNeutralClick} text='Neutral' />
                <Button handleClick={handleBadClick} text='Bad' />
            </div>
            <h3>Statistics</h3>
                <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} goodPercentage={goodPercentage} />
    </div>
  )
}

export default App