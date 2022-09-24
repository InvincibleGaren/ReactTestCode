import React, { useEffect, useState } from "react";

function UseEffectTest() {
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  console.log(value1, value2);

  useEffect(() => {
    console.log("A");
    setValue2(["1", "2", "3"]);
  }, []);

  useEffect(() => {
    console.log("B");
    if (value2.length) {
      setValue1([1, 2, 3]);
    }
  }, [value2]);

  return (
    <div>
      <p>{console.log("render")}</p>
    </div>
  );
}
export default UseEffectTest;
