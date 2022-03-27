import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import { countState } from '../store/recoiltest';

function Recoiltest() {
    const [ count, setCount ] = useRecoilState(countState); // useRecoilState 을 통한 value, setter 반환
    const setCountUseSetRecoilState = useSetRecoilState(countState); // 값을 변경하는 함수만 반환
    const resetCount = useResetRecoilState(countState); // 설정된 기본값으로 리셋
    return (
        <div>
            <h2>읽기 쓰기 카운트 컴포넌트</h2>
            <p>recoil 한번 보고 가세요들</p>
            <p>카운트 {count}</p>
            <button onClick={() => setCount(count + 1)}>숫자 증가</button>
            <button onClick={() => setCount(count - 1)}>숫자 감소</button>
            <button onClick={() => setCountUseSetRecoilState(count + 1)}>숫자 증가 (useSetRecoilState 사용)</button>
            <button onClick={() => setCountUseSetRecoilState(count - 1)}>숫자 감소 (useSetRecoilState 사용)</button>
            <button onClick={resetCount}>카운트 리셋</button>
        </div>
    );
}

export default Recoiltest;