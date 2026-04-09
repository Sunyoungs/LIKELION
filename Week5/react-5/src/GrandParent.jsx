import React from 'react';
import Parent from './Parent';

function GrandParent() {
  return (
    <div className="drill-box grandparent">
      <p className="drill-title">GrandParent</p>
      <Parent user="아기사자" />
    </div>
  );
}

export default GrandParent;