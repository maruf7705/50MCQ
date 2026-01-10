import { useState } from 'react'
import './StartScreen.css'

function StartScreen({ onStart, totalQuestions = 25, duration = 18 * 60, totalMarks = 31.25, passMark = 16.5 }) {
  const [name, setName] = useState('')

  const durationMinutes = Math.ceil(duration / 60)

  function handleSubmit(e) {
    e.preventDefault()
    if (name.trim()) {
      onStart(name.trim())
    }
  }

  return (
    <div className="start-screen">
      <div className="start-card">
        <h1 className="bengali">{totalQuestions} MCQ Exam</h1>
        <div className="exam-info">
          <p className="bengali">সময়: {durationMinutes} মিনিট | মোট নম্বর: {totalMarks} | প্রশ্ন: {totalQuestions}</p>
          <p className="bengali">সঠিক: +১.২৫ | ভুল: -০.২৫ | পাস মার্ক: {passMark}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="student-name" className="bengali">নাম / আইডি</label>
          <input
            id="student-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার নাম বা আইডি লিখুন"
            className="bengali"
            autoFocus
          />
          <button type="submit" className="primary-btn bengali">
            পরীক্ষা শুরু করুন
          </button>
          <p className="hint bengali">পাসওয়ার্ড প্রয়োজন নেই। শুধু নাম দিয়ে শুরু করুন।</p>
        </form>
      </div>
    </div>
  )
}

export default StartScreen


