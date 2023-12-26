import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moneyDebited } from "./bankingSlice";

function Withdraw({ setIswithdraw }) {
  const [amout, setAmount] = useState("");
  const [complete, setComplete] = useState(false);

  const bank = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  const handleWithdraw = () => {
    if (amout === "") return;
    const withdrawAmount = parseInt(amout);
    if (withdrawAmount > bank) {
      alert("Not enough balance");
      return;
    }
    dispatch(moneyDebited(withdrawAmount));
    setAmount("");
    setComplete(true);
    setTimeout(() => {
      setIswithdraw(false);
    }, 2000);
  };
  return (
    <>
      <div className="main_container flx-clm">
        {complete ? (
          <h4>Your Transaction is complete</h4>
        ) : (
          <>
            <h4>Enter Amount</h4>
            <input type="number" onChange={(e) => setAmount(e.target.value)} />
          </>
        )}
      </div>
      <div className="btn_container">
        <div className="atm_btn">
          <h4>Ok</h4>
          <button onClick={handleWithdraw}>Press</button>
        </div>

        <div className="atm_btn">
          <h4>Back</h4>
          <button onClick={() => setIswithdraw(false)}>Press</button>
        </div>
      </div>
    </>
  );
}

export default Withdraw;
