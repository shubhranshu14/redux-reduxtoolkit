import React from "react";
import { useSelector } from "react-redux";

function Balance({ setIsbalance }) {
  const bank = useSelector((state) => state.bank);

  return (
    <>
      <div className="main_container flx-clm">
        <h4>Your Balance is</h4>
        <h5>Rs.{bank}</h5>
      </div>
      <div className="btn_container">
        <div className="atm_btn">
          <h4>Back</h4>
          <button onClick={() => setIsbalance(false)}>Press</button>
        </div>
      </div>
    </>
  );
}

export default Balance;
