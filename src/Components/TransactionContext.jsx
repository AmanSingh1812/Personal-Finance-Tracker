import { createContext } from "react";

export const TransactionContext = createContext({
  transaction: [],
  setTransaction: () => {},
});
