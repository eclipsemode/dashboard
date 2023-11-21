import React from 'react';
import {MdSupervisedUserCircle} from "react-icons/md";
import {ICardItem} from "@components/dashboard/Cards";



const CardItem = ({text, amount, title, percent}: ICardItem) => {
    return (
        <div className='flex flex-row gap-x-2.5 custom-container hover:bg-slate-400 hover:dark:bg-gray-700 cursor-pointer flex-1 min-w-fit'>
            <MdSupervisedUserCircle size={24}/>
            <div>
                <div className='flex flex-col gap-y-2.5'>
                    <p>{title}</p>
                    <p className='text-2xl'>{amount}</p>
                    <p className='text-sm'><span className='text-green-600'>{percent}%</span> {text}</p>
                </div>
            </div>
        </div>
    );
};

export default CardItem;