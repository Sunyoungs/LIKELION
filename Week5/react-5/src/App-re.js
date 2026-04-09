/* React.memo, useCallback 함수
import React, {useState, useCallback} from 'react';

//const Child = React.memo(({name}) => {
//  console.log("Child Rendered");
//  return <div>안녕, {name}!</div>
//});

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me (Child)</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  console.log("Parent Rendered");

  const handleClick = useCallback(() => {
    console.log("Child Button Clicked!");
  }, []);

  return (
    <div>
//      <Child name="Grace" />
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count+1)}>+</button>
      <p>count: {count}</p>
    </div>
  );
}

export default Parent;
*/

import React, {useState, useMemo} from 'react';

function heavyCalculation(num) {
  console.log("heacyCalculation 실행 중...");
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += num;
  }
  return result;
}

function Calculator() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");
  const result = useMemo(() => heavyCalculation(number), [number]);
  
  return (
    <div>
      <h2>계산기</h2>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <p>결과: {result}</p>
      <input type="text" placeholder="여기에 텍스트 입력" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Calculator;