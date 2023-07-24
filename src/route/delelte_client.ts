import express from 'express';
import { Client } from '../entities/client';
const router = express.Router();
router.delete("/api/client/:clientId", async (req,res)=>{
    const {clientId} = req.params;
    const response = await Client.delete({id: clientId});
    return res.json(response)
})
export {router as deleteClientRouter}