import React from 'react';
import Image from "next/image";
import {IProduct} from "@components/dashboard/Products";

const ProductItem = ({id, title, description, created, price, stock, image}: IProduct) => {
    return (
        <tr>
            <td className='flex flex-row gap-x-1.5 items-center'>
                <Image className='rounded-full' src={image} alt='logo' width={40} height={40}/>
                {title}
            </td>
            <td className='max-w-xs whitespace-nowrap overflow-hidden overflow-ellipsis'>{description}</td>
            <td>${price}</td>
            <td>{created.toDateString()}</td>
            <td>{stock}</td>
            <td>
                <div className='flex gap-x-1.5'>
                    <button className='text-xs bg-emerald-700 px-2.5 py-1 rounded-md w-fit'
                            onClick={() => console.log(id)}>View
                    </button>
                    <button className='text-xs bg-red-700 px-2.5 py-1 rounded-md w-fit'
                            onClick={() => console.log(id)}>Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ProductItem;