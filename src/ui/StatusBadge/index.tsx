import React from 'react';

export type StatusType = 'pending' | 'done' | 'cancelled'

interface IProps {
    status: StatusType
}

const StatusBadge = ({status}: IProps) => {
    switch (status) {
        case 'pending':
            return <span className='bg-amber-300 p-1.5 rounded-md text-sm'>{status}</span>;
        case 'done':
            return <span className='bg-gray-400 p-1.5 rounded-md text-sm'>{status}</span>;
        default:
            return <span className='bg-red-500 p-1.5 rounded-md text-sm'>{status}</span>;
    }
};

export default StatusBadge;