import { Entity, Column } from "typeorm";
import { Person } from "./utils/person";
@Entity("client")
export class Client extends Person {
  @Column({
    type: "numeric",
  })
  balance: number;
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
}
