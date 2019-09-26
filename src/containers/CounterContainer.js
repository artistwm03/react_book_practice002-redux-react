import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrase={decrease} />;
};

const mapStateToProps = state => ({
  number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
  // 임시 함수
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});
// mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수.
// mapDispatchToProps :액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
