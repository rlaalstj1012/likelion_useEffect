import React, { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["apple", "banana", "orange"]);

  // 의존성 배열을 변경하지 않고, 배열 내부의 요소를 변경하여 오류를 방지
  useEffect(() => {
    console.log("useEffect 실행됨");
  }, [items]);

  const addItem = () => {
    const newItem = prompt("newItem을 입력하세요: ");
    if (newItem) {
      setItems((prevItem) => [...prevItem, newItem]);
      // 배열을 새로 만들어 새로운 항목을 추가
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem} className="border">
        Add Item
      </button>
    </div>
  );
};

export default ItemList;