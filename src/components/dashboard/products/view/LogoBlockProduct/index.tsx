import React from 'react';
import Image from "next/image";

interface IProps {
    title: string
}

const LogoBlockProduct = ({title}: IProps) => {
    return (
        <div className='flex flex-col gap-y-5 h-fit custom-container'>
            <div className='w-80 h-80 max-w-sm relative'>
                <Image src='/noproduct.jpg' alt='product_logo' fill className='object-contain'/>
            </div>
            <p>{title}</p>
        </div>
    );
};

export default LogoBlockProduct;