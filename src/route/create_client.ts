import express from "express";
const router = express.Router();
import { Client } from "../entities/client";
router.post("/api/client", async (req, res) => {
  const { firstName, lastName, email, cardNumber, balance, id } = req.body;
  const client = Client.create({
    id:id,
    firstname: firstName,
    lastname: lastName,
    email: email,
    card_number: cardNumber,
    balance,
  });
//   console.log(req.body);
    await client.save();
  return res.json(client);

});
export { router as createClientRouter };
