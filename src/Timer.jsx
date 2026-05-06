import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. seconds 상태 생성 (처음 값은 0)
    console.log("컴포넌트 마운트됨");

    // 2. setInterval을 통해 1초마다 seconds 값을 1씩 증가
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // 이전 상태값 기준으로 +1
      console.log("타이머 작동중..."); // 콘솔에 로그 출력
    }, 1000); // 1000ms = 1초

    // 3. clean-up 함수: 컴포넌트가 언마운트될 때 실행됨
    return () => {
      clearInterval(interval); // 타이머 정리 (중단)
      console.log("언마운트 되었습니다."); // 정리 로그 출력
    };
  }, []); // 빈 배열 -> 마운트될 때 한 번만 실행

  // 4. 현재 초 값을 화면에 출력
  return <div>Timer: {seconds} 초</div>;
};

export default Timer;