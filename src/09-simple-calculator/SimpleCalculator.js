import { useReducer } from 'react';

const initialState = {
  numbers: [0, 0],
  total: undefined,
}

const actions = {
  add: 'ADD',
  subtract: 'SUBTRACT',
  clear: 'CLEAR',
  selectNumOne: 'SELECT_NUM_ONE',
  selectNumTwo: 'SELECT_NUM_TWO'
}

function reducer(state, action) {
  if (action.type === actions.add) return { ...state, total: state.numbers[0] + state.numbers[1] }
  if (action.type === actions.subtract) return { ...state, total: state.numbers[0] - state.numbers[1] }
  if (action.type === actions.selectNumOne) return { ...state, numbers: [action.value, state.numbers[1]] }
  if (action.type === actions.clear) return initialState;
  if (action.type === actions.selectNumTwo) return { ...state, numbers: [state.numbers[0], action.value] }
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => dispatch({ type: actions.selectNumOne, value: number })}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => dispatch({ type: actions.selectNumTwo, value: number })}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: actions.add })}>+</button>
        <button onClick={() => dispatch({ type: actions.subtract })}>-</button>
        <button onClick={() => dispatch({ type: actions.clear })}>c</button>
      </div>
      <div><h2>Result: {state.total}</h2></div>
    </div>
  )
}
