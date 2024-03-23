import { useState } from "react";

const Updated = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const btn = () => {
    setAmount(amount);
    props.onAmountUpdate("100"); // Update the parent component's state
  };

  return (
    <div>
      <button onClick={btn}>update</button>
    </div>
  );
};

export default Updated;
