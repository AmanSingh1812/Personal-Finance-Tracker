import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TransactionContext } from "./TransactionContext";

function AddTransaction() {
  const { register, handleSubmit, reset } = useForm();
  const { setTransaction } = useContext(TransactionContext);

  const onSubmit = (data) => {
    setTransaction((prev) => [...prev, data]);
    reset({ title: "", amount: "", category: "", type: "" });
  };

  return (
    <>
      <h1 className="text-center font-black text-2xl mt-2">Transaction Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center mt-3 border w-250 m-auto rounded-2xl"
      >
        <div className="text-lg font-semibold mt-5">
          <label>Title: </label>
          <input
            id="title"
            type="text"
            placeholder="eg. Salary,Grocery"
            {...register("title", {
              required: true,
            })}
            className="border rounded-lg p-1 ml-9"
          />
        </div>
        <div className="text-lg font-semibold mt-5">
          <label>Amount: </label>
          <input
            id="amount"
            type="text"
            placeholder="eg. 1000"
            {...register("amount", { required: true, pattern: /^\d+$/ })}
            className="border rounded-lg p-1 ml-2"
          />
        </div>
        <div className="text-lg font-semibold mt-5">
          <label>Category: </label>
          <input
            id="category"
            type="text"
            placeholder="eg. food,rent"
            {...register("category", {
              required: true,
            })}
            className="border rounded-lg p-1 ml-2"
          />
        </div>
        <div className="text-lg font-semibold mt-5">
          <label>Type: </label>
          <select
            id="type"
            {...register("type", {
              required: "Please select a transaction type",
            })}
            className="border  rounded-lg p-1 ml-2"
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-3xl mt-2 mb-5 cursor-pointer"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTransaction;
