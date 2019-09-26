import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
// };

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   {
//         increase,
//         decrease,
//   },
// )(CounterContainer);

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  return (
  <Counter 
    number={number} 
    onIncrease={() => dispatch(increase())}
    onDecrease={() => dispatch(decrease())}
  />
  );
};

export default CounterContainer;