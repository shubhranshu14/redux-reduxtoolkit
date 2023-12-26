import { useState } from "react";
import { useDispatch } from "react-redux";
import { moneyCredit } from "./bankingSlice";

function Deposit({ setIsdeposit }) {
  const [amount, setAmount] = useState(null);
  const [complete, setComplete] = useState(false);
  //   const bank = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    if (amount !== null) {
      setComplete(true);
      dispatch(moneyCredit(parseInt(amount)));
      setTimeout(() => {
        setIsdeposit(false);
      }, 2000);
    }
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
          <button onClick={handleDeposit}>Press</button>
        </div>
        <div className="atm_btn">
          <h4>Back</h4>
          <button onClick={() => setIsdeposit(false)}>Press</button>
        </div>
      </div>
    </>
  );
}

export default Deposit;
