import React from 'react';
import {MdSearch} from "react-icons/md";

interface IProps {
    placeholder: string,
    iconEnabled?: boolean
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const Search = ({placeholder, iconEnabled = true, inputProps}: IProps) => {
    return (
        <div className='flex items-center bg-slate-100 dark:bg-gray-700 p-2.5 gap-x-2.5 rounded-lg'>
            {iconEnabled && <MdSearch/>}
            <input type="text" placeholder={placeholder} className='bg-transparent text-xs outline-none' {...inputProps} />
        </div>
    );
};

export default Search;