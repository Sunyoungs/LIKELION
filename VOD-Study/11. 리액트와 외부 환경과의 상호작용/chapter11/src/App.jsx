import Header from './components/Header'
import './App.css'
import TimerController from './components/TimerController';

function App() {
  return (
    <div className='timerAppContainer'>
      <Header />
      <TimerController />
    </div>
  )
}

export default App;