// import {useState, useEffect} from "react" 
import React from 'react';
import axios from "axios"


export default class Transaction extends React.Component {

    state = {
        transaction: {
            status: "",
            amount: 0.0,
            description: ""
        }
    }
// const [transaction , setTransaction] = useState (null)
// const [formTransaction, setFormTransaction] = useState ({ 
//     status: "",
//     amount: 0.0,
//     description: ""
// })

    componentDidMount() {
        axios.get ("https://dev.lineupapp.digital/webhook-service/webhook/transaction/" + "trtxairtgbetuh2z6uxy", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=> {
            const transaction = response.data
            console.log(transaction)
            this.setState({transaction})
            }).catch((error) => {
            if (error .response) {
                console.log (error.response); 
                console.log (error.response.status);
                console.log (error.response.headers);
            }
            })
    }
// useEffect(() => {
//     getTransaction("trtxairtgbetuh2z6uxy")
// }, {})

// function getTransaction (transactionId) {
//     axios ({ 
//     method: "GET",
//     url:"/webhook-service/webhook/transaction/" + transactionId
//     }).then((response)=> {
//     const data = response.data
//     setTransaction(data)
//     }).catch((error) => {
//     if (error .response) {
//         console.log (error.response); 
//         console.log (error.response.status);
//         console.log (error.response.headers);
//     }
//     })
// }
    render() {
        return (
            <div className="transaction">   
                <h1> TransactionStatus: {this.state.transaction.status} </h1>
                <p> Amount: {this.state.transaction.amount}</p>
                <p> Description: {this.state.transaction.description}</p>
            </div>
        )
    }
}

// export default Transaction;
