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
