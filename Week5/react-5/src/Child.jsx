/* prop drilling 수정 전
import React from 'react';

function Child({user}) {
  return(
    <div className="drill-box child">
      <p className="drill-title">Child</p>
      <p>안녕하세요, {user}님!</p>
    </div>
  );
}
*/

/* props drilling 수정 후
import React, { useContext } from 'react';
import UserContext from './UserContext';

function Child({}) {
  const user = useContext(UserContext);
  return(
    <div className="drill-box child">
      <p className="drill-title">Child (Context로 받음)</p>
      <p>안녕하세요, {user}님!</p>
    </div>
  );
}

export default Child;
*/

import React from 'react';

/* 리렌더링 -> 최소화하기
export default function Child() {
  console.log("Child rendered");

  return (
    <div>
      <h4>Child 컴포넌트</h4>
    </div>
  );
}
*/

function Child() {
  console.log("Child rendered");

  return (
    <div>
      <h4>Child 컴포넌트</h4>
    </div>
  );
}

export default React.memo(Child);