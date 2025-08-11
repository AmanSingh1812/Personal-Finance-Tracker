  import { useContext } from "react";
  import { TransactionContext } from "./TransactionContext";

  function SummaryCard() {
    const context = useContext(TransactionContext);
    const transaction = Array.isArray(context?.transaction)
      ? context.transaction
      : [];

    const income = transaction
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const expense = transaction
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const balance = income - expense;
    return (
      <>
        <div className="flex text-center bg-gray-50 mt-2 ">
          <div className="flex-1  bg-blue-100 font-black text-xl text-blue-800 border-r-4 border-blue-400">
            Balance
            <br />₹{balance.toFixed(2)}
          </div>
          <div className="flex-1 bg-green-100 font-black text-green-800 text-xl border-r-4 border-green-400">
            Total Income
            <br />₹{income.toFixed(2)}
          </div>
          <div className="flex-1 bg-red-100  font-black text-xl text-red-800 border-r-red-400">
            Total Expenses
            <br />₹{expense.toFixed(2)}
          </div>
        </div>
      </>
    );
  }

  export default SummaryCard;
