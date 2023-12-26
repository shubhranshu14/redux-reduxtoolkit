import React, { useState } from "react";
import "./bank.css";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Balance from "./Balance";

function Bank() {
  const [isdeposit, setIsdeposit] = useState(false);
  const [iswithdraw, setIswithdraw] = useState(false);
  const [isbalance, setIsbalance] = useState(false);

  const openDeposit = () => {
    setIsdeposit(true);
  };
  const openWithdraw = () => {
    setIswithdraw(true);
  };
  const openBalance = () => {
    setIsbalance(true);
  };
  return (
    <div className="bank_container">
      {isdeposit ? (
        <Deposit setIsdeposit={setIsdeposit} />
      ) : iswithdraw ? (
        <Withdraw setIswithdraw={setIswithdraw} />
      ) : isbalance ? (
        <Balance setIsbalance={setIsbalance} />
      ) : (
        <>
          <div className="main_container">
            <h2>Welcome to your Bank</h2>
          </div>
          <div className="btn_container">
            <div className="atm_btn">
              <h4>Deposit</h4>
              <button onClick={openDeposit}>Press</button>
            </div>
            <div className="atm_btn">
              <h4>Withdraw</h4>
              <button onClick={openWithdraw}>Press</button>
            </div>
            <div className="atm_btn">
              <h4>Check Balance</h4>
              <button onClick={openBalance}>Press</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Bank;
