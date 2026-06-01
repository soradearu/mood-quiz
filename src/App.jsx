import { useState } from "react"
import { questions } from "./questions"
import { getMood } from "./resultEngine"
import "./App.css"

export default function App() {
  const [step, setStep] = useState(0)

  const [stats, setStats] = useState({
    energy: 50,
    focus: 50,
    creativity: 50,
    calmness: 50,
    social: 50
  })

  const answerQuestion = (effects) => {
    const updated = { ...stats }

    Object.keys(effects).forEach((key) => {
      updated[key] += effects[key]
    })

    setStats(updated)
    setStep(step + 1)
  }

  if (step >= questions.length) {
    const result = getMood(stats)

    return (
      <div className="container">
        <h1>Your Emotional Color</h1>

        <div
          className="color-box"
          style={{
            background: result.color
          }}
        />

        <h2>{result.colorName}</h2>

        <h3>{result.className}</h3>

        <p>{result.joke}</p>

        <div className="stats">
          <p>⚡ Energy: {stats.energy}</p>
          <p>🎯 Focus: {stats.focus}</p>
          <p>🎨 Creativity: {stats.creativity}</p>
          <p>🌿 Calmness: {stats.calmness}</p>
          <p>👥 Social: {stats.social}</p>
        </div>

        <button
          onClick={() => {
            setStep(0)
            setStats({
              energy: 50,
              focus: 50,
              creativity: 50,
              calmness: 50,
              social: 50
            })
          }}
        >
          Take Again
        </button>
      </div>
    )
  }

  const current = questions[step]

  return (
    <div className="container">
      <h1>Mood Color Quiz</h1>

      <h2>{current.question}</h2>

      {current.answers.map((answer) => (
        <button
          key={answer.text}
          onClick={() =>
            answerQuestion(answer.effects)
          }
        >
          {answer.text}
        </button>
      ))}
    </div>
  )
}