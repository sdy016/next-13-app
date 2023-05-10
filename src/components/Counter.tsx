'use client';
import React, { useState } from 'react';

type Props = {};

export default function Counter({}: Props) {
  const [count, setCount] = useState(0);
  console.log('Hello client');
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>숫자 증가!</button>
    </>
  );
}
