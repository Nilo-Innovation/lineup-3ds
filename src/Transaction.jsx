import {useState, useEffect} from "react" 
import axios from "axios"

function Transaction () {
const [transaction , setTransaction] = useState (null)
const [formTransaction, setFormTransaction] = useState ({ 
    status: "",
    amount: 0.0,
    description: ""
})

useEffect(() => {
    getTransaction("trtxairtgbetuh2z6uxy")
}, [])

function getTransaction (transactionId) {
    axios ({ 
    method: "GET",
    url:"/webhook-service/webhook/transaction/" + transactionId
    }).then((response)=> {
    const data = response.data
    setTransaction(data)
    }).catch((error) => {
    if (error .response) {
        console.log (error.response); 
        console.log (error .response.status);
        console.log (error.response.headers);
    }
    })
}

return (
    <div className="transaction">   
        <h1> TransactionStatus: {transaction.status} </h1>
        <p> Amount: {transaction.amount}</p>
        <p> Description: {transaction.description}</p>
    </div>
);
}

export default Transaction;
