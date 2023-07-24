import express from "express";
const router = express.Router();
import { Banker } from "../entities/banker";
router.post("/api/banker", async (req, res) => {
  const { firstName, lastName, email, cardNumber, empno, id } = req.body;
  const banker = Banker.create({
    id:id,
    firstname: firstName,
    lastname: lastName,
    email: email,
    empno: empno
  });
//   console.log(req.body);
    await banker.save();
  return res.json(banker);

});
export { router as createBankerRouter };
