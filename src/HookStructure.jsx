import React, { useEffect, useState } from "react";

const HookStructure = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("빈 텍스트");

  // 첫 번째 useEffect: 컴포넌트가 마운트될 때 실행
  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
  }, []);

  // 두 번째 useEffect: count 상태가 변경될 때 실행
  useEffect(() => {
    console.log("카운트가 변경되었음:", count);
  }, [count]);

  // 세 번째 useEffect: text 상태가 변경될 때 실행
  useEffect(() => {
    console.log("텍스트가 변경되었음:", text);
  }, [text]);  


  // 네 번째 useEffect: 매 렌더링마다 실행됨
  useEffect(() => {
    console.log("매 렌더링마다 렌더링됨");
  });

  // 렌더링
  return (
    <div>
      <h2 className="text-2xl">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="border">
        Increment
      </button>
      <hr className="text-gray-300" />
      <h2 className="text-2xl">Typed text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
      />
    </div>
  );
};

export default HookStructure;