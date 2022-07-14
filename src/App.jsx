import { useState } from 'react'

import './App.css'

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  const addClick = () => {
    setCount((count) => count + 1)
  }

  const resetClick = () => {
    setCount((count) => (count = 0))
  }

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button onClick={addClick}>
          count is {count}
        </button>
        <button onClick={resetClick}>
          Reset Count
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default App
