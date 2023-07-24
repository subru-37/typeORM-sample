import express from "express";
import { Client } from "../entities/client";
import { Banker } from "../entities/banker";
const router = express.Router();
router.put("/api/banker/:bankerId/client/:clientId", async (req, res) => {
    const {bankerId, clientId} = req.params;
    const client = await Client.findOneBy({id: clientId});
    const banker = await Banker.findOneBy({id: bankerId});
    if (!banker || !client){
        return res.json({msg: 'banker or client not found'})
    }else{
        banker.client = [client]
    }
    await banker.save()

    return res.json({
        msg: 'banker and client connected'
    })
});
export { router as connectBankerToClient };
