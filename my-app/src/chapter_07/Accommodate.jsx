import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;
let a = 0;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  console.log("Wrender");
  useEffect(() => {
    console.log(++a);
    console.log("===================");
    console.log("useEffect() is called");
    console.log(isFull);
  });

  useEffect(() => {
    setIsFull(false);
    console.log(`Current count value : ${count}`);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <p>{console.log("render")}</p>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      {/* <button onClick={increaseCount} disabled={isFull}>
        입장
      </button> */}
      {/* <button onClick={decreaseCount}>퇴장</button> */}
      <button
        onClick={() => {
          setIsFull(false);
        }}
      >
        퇴장
      </button>

      {isFull && <p style={{ clolor: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
