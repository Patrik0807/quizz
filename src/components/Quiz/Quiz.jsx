import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>QUIZZ APP</h1>
        <hr />
        <h2>Which device required for internet connection</h2>
        <ul>
          <li>modem</li>
          <li>router</li>
          <li>lan cable</li>
          <li>pendrive</li>
        </ul>
        <button>Next</button>
        <div className='index'>1 of 5 quetions</div>
    </div>
  )
}

export default Quiz