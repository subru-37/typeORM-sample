import express from "express";
import { Client } from "../../src/entities/client";
import { AppDataSource } from "../../src/index";

const router = express.Router();
router.get("/api/client", async (req, res) => {
  const client = await AppDataSource.createQueryBuilder()
    .select("firstname, lastname, email, balance")
    .from(Client, "client")
    .where('balance > :amount',{amount: 5000})
    .getRawMany();
  return res.json(client);
});
export { router as fetchClientRouter };
