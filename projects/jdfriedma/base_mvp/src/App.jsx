import { useState, useRef, useEffect } from 'react'
import {
  PASSAGES,
  DEFAULT_DIFFICULTY,
} from './data/passages.js'
import DifficultyPicker from './components/DifficultyPicker.jsx'
import './App.css'

export default function App() {
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY)
  const [typed, setTyped] = useState('')
  const inputRef = useRef(null)

  const passage = PASSAGES[difficulty]
  const finished = typed === passage

  function handleDifficultyChange(next) {
    setDifficulty(next)
    setTyped('')
    queueMicrotask(() => inputRef.current?.focus())
  }

  useEffect(() => {
    if (!finished) {
      inputRef.current?.focus()
    }
  }, [finished])

  function handleChange(e) {
    const next = e.target.value
    if (next.length <= passage.length) {
      setTyped(next)
    }
  }

  function handleReset() {
    setTyped('')
    queueMicrotask(() => inputRef.current?.focus())
  }

  const chars = Array.from(passage)

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Marvis Bacon Judges Typing</h1>
        <p className="tagline">Retype the passage. Marvis is watching.</p>
      </header>

      <main className="main">
        <section className="board" aria-label="Typing feedback">
          <DifficultyPicker
            value={difficulty}
            onChange={handleDifficultyChange}
          />

          <div className="passage" role="presentation">
            {chars.map((targetCh, i) => {
              const isTyped = i < typed.length
              const isCursor = i === typed.length && !finished
              let statusClass = 'upcoming'
              if (isTyped) {
                statusClass = typed[i] === targetCh ? 'correct' : 'wrong'
              } else if (isCursor) {
                statusClass = 'cursor-cell'
              }
              if (targetCh === '\n') {
                return (
                  <span
                    key={`${difficulty}-${i}`}
                    className={`glyph glyph--newline ${statusClass}`}
                  >
                    <br />
                  </span>
                )
              }
              const display = targetCh === ' ' ? '\u00a0' : targetCh
              return (
                <span
                  key={`${difficulty}-${i}`}
                  className={`glyph ${statusClass}`}
                >
                  {display}
                </span>
              )
            })}
          </div>

          {finished && (
            <p className="finished-banner" role="status">
              Finished!
            </p>
          )}

          <label className="sr-only" htmlFor="typing-input">
            Type the passage
          </label>
          <textarea
            id="typing-input"
            ref={inputRef}
            className="typing-input"
            value={typed}
            onChange={handleChange}
            onPaste={(e) => e.preventDefault()}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            rows={difficulty === 'hard' ? 8 : 3}
            readOnly={finished}
            aria-label="Type the passage"
          />

          <div className="actions">
            <button type="button" className="btn-reset" onClick={handleReset}>
              Start over
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
