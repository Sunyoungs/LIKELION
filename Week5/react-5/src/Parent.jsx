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

function Parent({user}) {
  return (
    <div className="drill-box parent">
      <p className="drill-title">Parent (props 없이 전달)</p>
      <Child />
    </div>
  );
}

export default Parent;