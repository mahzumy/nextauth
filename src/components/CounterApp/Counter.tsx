'use client';

import { useState } from 'react';

import { Button } from '../ui/button';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex w-[450px] justify-center items-center m-auto h-screen text-center">
      <div className="border-4 p-2 border-black rounded-md">
        <div className="p-2">
          <div className="text-3xl">Counter App</div>
          <div className="text-xl py-2">{counter}</div>
        </div>
        <div className="grid gap-2">
          <Button variant="secondary" onClick={increment}>Increment</Button>
          <Button variant="secondary" onClick={decrement}>Decrement</Button>
        </div>
      </div>
    </div>
  );
};