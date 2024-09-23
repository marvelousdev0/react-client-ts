import { decrement, increment, incrementBy, reset } from './counterSlice.ts';
import { useAppDispatch } from '../../store';

export function Actions() {
  const dispatch = useAppDispatch();

  function onIncrement() {
    dispatch(increment());
  }

  function onDecrement() {
    dispatch(decrement());
  }

  function onIncrementBy(amount: number) {
    dispatch(incrementBy(amount));
  }

  function onReset() {
    dispatch(reset());
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
      }}
    >
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={() => onIncrementBy(5)}>Increment by 5</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
