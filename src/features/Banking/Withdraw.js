import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moneyDebited } from "./bankingSlice";

function Withdraw({ setIswithdraw }) {
  const [amout, setAmount] = useState("");

  const bank = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  const handleWithdraw = () => {
    const withdrawAmount = parseInt(amout);
    if (withdrawAmount > bank) {
      return alert("Not enough fund");
    }
    dispatch(moneyDebited(withdrawAmount));
    setAmount("");
    setIswithdraw(false);
  };
  return (
    <>
      <div>
        <h4>Enter Amount</h4>
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleWithdraw}>Press</button>
      <button onClick={() => setIswithdraw(false)}>Back</button>
    </>
  );
}

export default Withdraw;
