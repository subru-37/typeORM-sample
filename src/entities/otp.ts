import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("otp")
export class UserOtp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: "varchar",
  })
  hashedotp: string;
  @Column({
    type: "numeric",
  })
  phone: number;
  @Column({
    type: "varchar",
  })
  user: string;
}
