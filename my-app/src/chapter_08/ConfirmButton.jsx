import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(1);

  const handleConfirm = (e) => {
    setIsConfirmed((prevIsConfirmed) => {
      console.log(prevIsConfirmed);
      return !prevIsConfirmed;
    });
  };

  return (
    <button onClick={handleConfirm}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
