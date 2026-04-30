import React from 'react';
import Child from './Child';

/* prop drilling 수정 전
function Parent({user}) {
  return (
    <div className="drill-box parent">
      <p className="drill-title">Parent</p>
      <Child user={user} />
    </div>
  );
}
*/

/* props drilling 수정 후
function Parent({user}) {
  return (
    <div className="drill-box parent">
      <p className="drill-title">Parent (props 없이 전달)</p>
      <Child />
    </div>
  );
}

export default Parent;
*/

/* 리렌더링 -> 최소화하기
export default function Parent() {
  console.log("Parent rendered");

  return (
    <div>
      <h3>Parent 컴포넌트</h3>
      <Child />
    </div>
  );
}
*/

function Parent({ count }) {
  console.log("Parent rendered");

  return (
    <div>
      <h3>Parent 컴포넌트</h3>
      <p>GrandParent로부터 받은 count: {count}</p>
      <Child />
    </div>
  );
}

export default React.memo(Parent);