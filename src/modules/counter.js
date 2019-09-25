// 리 덕 스 관 련 코 드 작 성

// Ducks 패턴 사용할 예정.

// counter 모듈 작성.
// 1) 가장먼저 액션 타입 정의.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2) 액션 생성 함수 만들기
//    앞에 export 들어감. !! 왜 들어갈지 생각 조금만 해봐.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });


// 3) 초기화
//    number 값을 0 으로 초기화,
const initialState = {
  number: 0
};

// 4) 리듀서 함수.!! ( counter 라는 리듀서 함수.)
//    현재 상태를 참고해서 , 새로운 객체를 생성해서 반환해주는 코드작성해줬음.
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
// 함수 내보내주기.
export default counter;