import React, { useState } from "react";
import Timer from "./Timer"; // Timer 컴포넌트를 import

const TimerSwitch = () => {
  // 1. showTimer : 타이머를 보여줄지 여부를 관리하는 상태 (초기값은 true)
  const [showTimer, setShowTimer] = useState(true);

  // 2. 버튼 클릭 시 타이머의 표시 여부를 토글하는 함수
  const toggleTimer = () => {
    setShowTimer((prev) => !prev); // true -> false, false -> true 전환
  };

  return (
    <div>
      <h1>타이머 예제</h1>

      {/* 3. 토글 버튼 */}
      <button onClick={toggleTimer} className="border">
        {showTimer ? "타이머 숨기기" : "타이머 보이기"}
        {/* showTimer 상태에 따라 버튼 텍스트 변경 */}
      </button>

      <hr />

      {/* 4. 조건부 렌더링 : showTimer가 true일 때 <Timer />를 화면에 표시 */}
      {showTimer && <Timer />}
      {/* false일 경우 Timer 컴포넌트는 완전히 언마운트됨 -> useEffect의 clean-up 함수 실행 */}
    </div>
  );
};

export default TimerSwitch;