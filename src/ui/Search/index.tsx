import React, {ChangeEvent, FormEventHandler} from 'react';
import {MdSearch} from "react-icons/md";

interface IProps {
    placeholder: string,
    iconEnabled?: boolean
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
    inputEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({placeholder, iconEnabled = true, inputProps, inputEvent}: IProps) => {

    return (
        <div className='flex items-center bg-slate-100 dark:bg-gray-700 p-2.5 gap-x-2.5 rounded-lg'>
            {iconEnabled && <MdSearch/>}
            <input type="text" onInput={inputEvent} placeholder={placeholder} className='bg-transparent text-xs outline-none' {...inputProps} />
        </div>
    );
};

export default Search;