import "../App.css"
import { useState } from 'react';

const CounterController = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [histories, setHistories] = useState([]);

  return (
    <div>
      <div className="counterValue">{count}</div>
      <div className="counterController">
        <button onClick={() => { setCount(count-step); setHistories([...histories, -step]) }}>-</button>
        <button onClick={() => { setCount(count+step); setHistories([...histories, +step]) }}>+</button>
        <div className="counterStepper">
          <label>변화량</label>
          <input type="number" value={step} onChange={(e) => {
            const nextStep = Number(e.target.value);
            if (nextStep >= 1) {
              setStep(nextStep);
            }
          }} />
        </div>
      </div>
      <div>
        <h2>변경 내역</h2>
        { histories.length === 0 ? (
          <div>변경 내역이 없습니다.</div>
        ) : (
          <ol>
            {histories.map((history, index) => (
              <li key={`${index}-${history}`}>{history}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default CounterController;