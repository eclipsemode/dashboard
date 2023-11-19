import React from 'react';
import Image from "next/image";
import {ITransactionItem} from "@components/dashboard/Transactions";
import StatusBadge from "@ui/StatusBadge";

const TransactionItem = ({logo, name, status, amount, date}: ITransactionItem) => {
    return (
        <tr>
            <td className='flex items-center gap-x-1.5'>
                <Image src={logo} alt='avatar' width={40} height={40} className='rounded-full object-cover'/>
                {name}
            </td>
            <td><StatusBadge status={status}/></td>
            <td>{date}</td>
            <td>${amount}</td>
        </tr>
    );
};

export default TransactionItem;