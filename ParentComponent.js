// ParentComponent.js

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <ChildComponent count={count} />
    </div>
  );
}

export default ParentComponent;
