import React, { useCallback } from 'react';
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

  const onIncrease = useCallback( () => dispatch(increase()), [dispatch] );
  const onDecrease = useCallback( () => dispatch(decrease()), [dispatch] );
  // useDispatch 를 사용할 때는 useCallback 과 함께 사용하는 습관 들이기.
  // useCallback 으로 액션을 디스패치하는 함수를 감싸기. (컴포넌트 성능 최적화)

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;