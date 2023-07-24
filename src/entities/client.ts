import { Entity, Column, OneToMany, ManyToMany } from "typeorm";
import { Person } from "./utils/person";
import { Transactions } from "./transaction";
import { Banker } from "./banker";
@Entity("client")
export class Client extends Person {
  @Column({
    type: "numeric",
  })
  balance: number;
  @Column({ unique: true, length: 10 })
  card_number: string;
  @Column({
    default: true,
    name: "active",
  })
  isactive: boolean;

  @Column({ type: "simple-json", nullable: true })
  additionalinfo: {
    age: number;
    address: string;
  };
  @Column({ type: "simple-array", default: [] })
  beneficiary: string[];

  @OneToMany(() => Transactions, (transaction) => transaction.client)
  transactions: Transactions[];

  @ManyToMany(() => Banker)
  bankers: Banker[];
}
