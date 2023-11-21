import React from 'react';
import {StatusType} from "@ui/StatusBadge";
import TransactionItem from "@components/dashboard/Transactions/TransactionItem";

export interface ITransactionItem {
    id: number,
    logo: string,
    name: string,
    status: StatusType,
    date: string,
    amount: number
}

const transactionsArr: ITransactionItem[] = [
    {
        id: 1,
        logo: '/noavatar.png',
        name: 'John Doe',
        status: 'pending',
        date: '19.11.2023',
        amount: 2300
    },
    {
        id: 2,
        logo: '/noavatar.png',
        name: 'John Doe',
        status: 'done',
        date: '19.11.2023',
        amount: 2300
    },
    {
        id: 3,
        logo: '/noavatar.png',
        name: 'John Doe',
        status: 'cancelled',
        date: '19.11.2023',
        amount: 2300
    },
    {
        id: 4,
        logo: '/noavatar.png',
        name: 'John Doe',
        status: 'pending',
        date: '19.11.2023',
        amount: 2300
    },
    {
        id: 5,
        logo: '/noavatar.png',
        name: 'John Doe',
        status: 'done',
        date: '19.11.2023',
        amount: 2300
    }
]

const Transactions = () => {
    return (
        <div className='flex flex-col custom-container w-full gap-y-2.5'>
            <h2 className='text-2xl text-slate-500 dark:text-slate-400'>Latest Transactions</h2>
            <table className='border-separate border-spacing-3'>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
                </thead>
                <tbody className='gap-y-1.5'>
                {
                    transactionsArr.map(item => (
                        <TransactionItem key={item.id} id={item.id} logo={item.logo} name={item.name}
                                         status={item.status} date={item.date} amount={item.amount}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;