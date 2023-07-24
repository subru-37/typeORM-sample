import { DataSource } from "typeorm";
import { Client } from "./entities/client";
import { Banker } from "./entities/banker";
import { Transactions } from "./entities/transaction";
import express from "express";
import { createClientRouter } from "./route/create_client";
import { createBankerRouter } from "./route/banker";
const PORT = 8080;
const app = express();
const main = async () => {
  const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "subrurocks",
    database: "typeorm",
    entities: [Client, Banker, Transactions],
    synchronize: true,
  });
  app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
  });
  app.use(express.json());
  app.use(createClientRouter);
  app.use(createBankerRouter);
  try {
    AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to db");
  }
};
main();
