import { DataSource } from "typeorm";
import { Client } from "./entities/client";
import { Banker } from "./entities/banker";
import { Transactions } from "./entities/transaction";
import express from "express";
import { createClientRouter } from "./route/create_client";
import { createBankerRouter } from "./route/create_banker";
import { createTransactionId } from "./route/create_transaction";
import { connectBankerToClient } from "./route/connect_banker_to_client";
import { deleteClientRouter } from "./route/delelte_client";
import { fetchClientRouter } from "./route/fetch_clients";
import { UserOtp } from "./entities/otp";
import { sendOTPtophone } from "./route/send_otp";
const PORT = 8080;
const app = express();
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "subrurocks",
    database: "typeorm",
    entities: [Client, Banker, Transactions,UserOtp],
    synchronize: true,
  });
const main = async () => {
  app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
  });
  app.use(express.json());
  app.use(createClientRouter);
  app.use(createBankerRouter);
  app.use(createTransactionId);
  app.use(connectBankerToClient);
  app.use(deleteClientRouter);
  app.use(fetchClientRouter);
  app.use(sendOTPtophone);
  try {
    AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to db");
  }
};
main();
export {
    AppDataSource
}