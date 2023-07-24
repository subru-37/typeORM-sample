import { Entity, Column, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { Person } from "./utils/person";
import { Client } from "./client";
@Entity("banker")
export class Banker extends Person {
  @Column({ unique: true })
  empno: number;

  @ManyToMany(() => Client, {
    cascade: true,
  })
  @JoinTable({
    name: "bankers",
    joinColumn: {
      name: "banker",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id",
    },
  })
  client: Client[];
}
//client id banker id
