import { Entity, Column } from "typeorm";
import { Person } from "./utils/person";
@Entity("banker")
export class Banker extends Person {
  @Column({unique: true})
  empno: number
}
