import React from 'react';
import Image from "next/image";

interface IProps {
    name: string
}

const LogoBlockUser = ({name}: IProps) => {
    return (
        <div className='flex flex-col gap-y-5 h-fit custom-container'>
            <div className='w-80 h-80 max-w-sm relative'>
                <Image src='/noavatar.png' alt='user_logo' fill className='object-contain'/>
            </div>
            {name}
        </div>
    );
};

export default LogoBlockUser;