import { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

function TransactionList() {
     const { transaction } = useContext(TransactionContext);
  return (
    <>
      <h1 className="font-black text-center mt-5">Transaction Details</h1>
      <table
        className="mt-5 text-center  table-auto border-collapse border border-gray-400 m-auto"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th className="border border-gray-300">Title</th>
            <th className="border border-gray-300">Amount</th>
            <th className="border border-gray-300">Category</th>
            <th className="border border-gray-300">Type</th>
          </tr>
        </thead>
        <tbody>
          {transaction && transaction.length > 0 ? (
            transaction.map((tx, index) => (
              <tr key={index}>
                <td className="border border-gray-300">{tx.title}</td>
                <td className="border border-gray-300">{tx.amount}</td>
                <td className="border border-gray-300">{tx.category}</td>
                <td className="border border-gray-300">{tx.type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border border-gray-300 py-4">
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default TransactionList;
