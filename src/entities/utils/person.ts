import { Entity, Column, BaseEntity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
@Entity("person")
// {
//     type: "uuid",
//   }
export class Person extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({ unique: true })
  email: string;
  @CreateDateColumn()
  createdate: Date;
  @UpdateDateColumn()
  UpdateDateColumn: Date;
}
