'use client';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { increment, decrement, incrementByAmount, decrementByAmount } from '@/lib/features/testSlice';
import { RootState } from '@reduxjs/toolkit/query';

export default function Counter() {
  const count = useAppSelector((state) => state.test.value);

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center gap-4 p-6 border-2 border-blue-500 rounded-lg bg-blue-50 mt-4">
      <h2 className="text-2xl font-bold text-blue-700">Redux Counter Test</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Minus
        </button>
        <span className="text-3xl font-semibold min-w-[60px] text-center">
          {count}
        </span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <div className='flex gap-10'>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add 5
      </button>
      <button
        onClick={() => dispatch(decrementByAmount(5))}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Minus 5
      </button>
      </div>
      <p className="text-sm text-gray-600">Current value from Redux: {count}</p>
    </div>
  );
}

