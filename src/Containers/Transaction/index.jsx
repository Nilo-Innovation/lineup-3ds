import { useState, useEffect } from "react";
import axios from "axios";

import { useSearchParams } from "react-router-dom";

function Transaction() {
  const [searchParams] = useSearchParams();
  const transactionId = searchParams.get("id");

  const [transaction, setTransaction] = useState({
    status: "",
    amount: 0.0,
    description: "",
  });

  useEffect(() => {
    function init() {
      axios
        .get(
          `https://dev.lineupapp.digital/webhook-service/webhook/transaction/${transactionId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const transaction = response.data;
          console.log(transaction);
          setTransaction({ transaction });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }

    init();
  }, [transactionId]);

  return (
    <div className="transaction">
      <h1> TransactionStatus: {transaction?.status} </h1>
      <p> Amount: {transaction?.amount}</p>
      <p> Description: {transaction?.description}</p>
    </div>
  );
}

export default Transaction;
