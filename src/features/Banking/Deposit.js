import { useState } from "react";
import { useDispatch } from "react-redux";
import { moneyCredit } from "./bankingSlice";

function Deposit({ setIsdeposit }) {
  const [amount, setAmount] = useState(null);
  //   const bank = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(moneyCredit(parseInt(amount)));
  };

  return (
    <>
      <div>
        <h4>Enter Amount</h4>
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleDeposit}>Press</button>
      <button onClick={() => setIsdeposit(false)}>Back</button>
    </>
  );
}

export default Deposit;
