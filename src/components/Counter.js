import React, { useState } from "react";
import wespoke from "./wespoke2.png";

function Counter() {
  const [count, changeCount] = useState(0);

  const buttonHandler = () => {
    changeCount((prevState) => prevState + 1);
  };

  return (
    <div className="Counter">
      <img className="thumbsUp" src={wespoke} onClick={() => buttonHandler()} />
      {count === 1 ? (
        <p>This user has had {count} person phone them up!</p>
      ) : (
        <p>This user has had {count} people phone them up!</p>
      )}
    </div>
  );
}

export default Counter;
