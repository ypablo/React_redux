import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./actions";


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h1>Logged: True</h1> : <h1>Logged: False</h1>}
    </div >
  );
}

export default App;
