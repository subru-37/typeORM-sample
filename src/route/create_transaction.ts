import express from 'express';
import { TransactionTypes, Transactions } from '../entities/transaction';
import { Client } from '../entities/client';
const router = express.Router();

router.post("/api/client/:id/transaction", async (req,res)=>{
    const id = req.params.id;
    const {type,amount} = req.body;
    // console.log(id,type,amount);
    const client = await Client.findOneBy({id: id});
    // console.log(client)
    // repository.findOneBy({id: req.paams.id, 10)});
    if (!client){
        return res.json({msg:"client not found"})
    }
    else{
        const transaction = Transactions.create({
            amount: amount,
            type: type,
            client
        })
        await transaction.save()

        if(type===TransactionTypes.DEPOSIT){
            console.log(client.balance)
            client.balance = +client.balance + amount
            console.log(client.balance)
        }
        else if(type===TransactionTypes.WITHDRAW){
            console.log(client.balance)
            client.balance = client.balance - amount
            console.log(client.balance)
        }
        await client.save();

        return res.json({client: client, transaction: transaction})
    }
})
export {router as createTransactionId}