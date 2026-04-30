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

/* useMemo 함수
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
*/

import React, {useState, useEffect, Component} from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count+1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count>10 && prevState.count<=10) {
      console.log("카운트가 10을 초과했습니다!");
    }
  }

  render() {
    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <p>카운드: {this.state.count}</p>
        <button onClick={this.increment}>카운트 증가</button>
      </div>
    );
  }
}

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count>10) {
      console.log("카운트가 10을 초과했습니다!");
    }
  }, [count]);

  const increment = () => {
    setCount(count+1);
  };

  return (
    <div>
      <h2>함수형 컴포넌트</h2>
      <p>카운트: {count}</p>
      <button onClick={increment}>카운트 증가</button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}