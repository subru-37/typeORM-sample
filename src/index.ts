import { DataSource } from "typeorm";
import { Client } from "./entities/client";
import { Banker } from "./entities/banker";
import { Transactions } from "./entities/transaction";
const main = async () => {
  const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "subrurocks",
    database: "typeorm",
    entities: [Client, Banker, Transactions],
    synchronize: true
  });
  try {
    AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (error) {
    console.log(error)
    throw new Error("Unable to connect to db")
  }
};
main()