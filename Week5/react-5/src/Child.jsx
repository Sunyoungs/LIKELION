import React from 'react';

function Child({user}) {
  return(
    <div className="drill-box child">
      <p className="drill-title">Child</p>
      <p>안녕하세요, {user}님!</p>
    </div>
  );
}

export default Child;