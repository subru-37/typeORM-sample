import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
export enum TransactionTypes{
    DEPOSIT= 'desposit',
    WITHDRAW = 'withdraw'
}
@Entity('transactions')
export class Transactions extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'enum', enum: TransactionTypes})
    type: string;

    @Column({type:'numeric'})
    amount: number;
}