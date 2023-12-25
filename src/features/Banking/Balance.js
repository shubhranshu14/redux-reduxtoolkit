import React from "react";
import { useSelector } from "react-redux";

function Balance({ setIsbalance }) {
  const bank = useSelector((state) => state.bank);

  return (
    <>
      <div>
        <h4>Your Balance is</h4>
        <h5>Rs.{bank}</h5>
      </div>

      <button onClick={() => setIsbalance(false)}>Back</button>
    </>
  );
}

export default Balance;
