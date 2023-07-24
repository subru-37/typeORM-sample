import {BaseEntity, Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import { Client } from './client';
export enum TransactionTypes{
    DEPOSIT= 'deposit',
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

    @ManyToOne(
        ()=>Client,
        client => client.transactions
    )
    @JoinColumn(
        {
            name: 'client_id',
        }
    )
    client: Client
}