import { Entity, Column, BaseEntity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
@Entity("person")
export class Person extends BaseEntity {
  @PrimaryColumn({
    type: "uuid",
  })
  id: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true, length: 10 })
  card_number: string;
  @CreateDateColumn()
  createdat: Date;
  @UpdateDateColumn()
  UpdateDateColumn: Date;
}
