import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import { UserOtp } from "../entities/otp";
const fast2sms = require("fast-two-sms");
require("dotenv").config();
router.put("/api/otp/register", async (req, res) => {
  try {
    const { phoneno, name } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const OTP = Math.floor(Math.random() * 1000000).toString();
    // console.log(OTP, phoneno, name)
    const hashpass = bcrypt.hashSync(OTP, salt);
    // console.log(hashpass)
    const userotp = UserOtp.create({
      hashedotp: hashpass,
      phone: phoneno,
      user: name,
    });
    await userotp.save();
    const response = await fast2sms.sendMessage({
      authorization: process.env.AUTH_SMS,
      message: `Your OTP is ${OTP}`,
      numbers: [phoneno],
    });
    console.log(response)
    return res.json({
      msg: "otp successfully generated, check your phone for verification",
    });
  } catch (error) {
    console.log(error);
    return res.json({
        msg: error,
      });
  }
});
export { router as sendOTPtophone };
