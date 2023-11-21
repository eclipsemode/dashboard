'use client'
import React from 'react';
import Search from "@ui/Search";
import Link from "next/link";
import ProductItem from "@components/dashboard/Products/ProductItem";
import Pagination from "@components/dashboard/Pagination";

export interface IProduct {
    id: number,
    image: string,
    title: string,
    description: string,
    price: number,
    created: Date,
    stock: number,
}

const productsArr: IProduct[] = [
    {
        id: 1,
        image: '/noproduct.jpg',
        title: 'iPhone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, vel?',
        price: 1200,
        created: new Date(),
        stock: 24
    },
    {
        id: 2,
        image: '/noproduct.jpg',
        title: 'Samsung',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, vel?',
        price: 800,
        created: new Date(),
        stock: 42
    },
]

const usersArr: IProduct[] = [
    {
        id: 1,
        image: '/noproduct.jpg',
        title: 'iPhone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, itaque!',
        price: 150,
        created: new Date(),
        stock: 25
    },
    {
        id: 2,
        image: '/noproduct.jpg',
        title: 'Samsung',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, itaque!',
        price: 150,
        created: new Date(),
        stock: 25
    }
]


const Products = () => {
    return (
        <div className='flex flex-col gap-y-2.5 custom-container mt-5'>
            <div className='flex flex-row justify-between items-center'>
                <Search placeholder='Search for a products'/>
                <Link href='/dashboard/products/add'>
                    <button className='text-sm bg-slate-400 dark:bg-indigo-900 px-2.5 py-1.5 rounded-md w-fit'>Add New
                    </button>
                </Link>
            </div>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Status</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    productsArr.map(product => <ProductItem key={product.id} description={product.description}
                                                            created={product.created}
                                                            stock={product.stock} id={product.id} image={product.image}
                                                            title={product.title}
                                                            price={product.price}/>)
                }
                </tbody>
                <tfoot>
                <tr><td colSpan={6}><Pagination previousButtonDisabled={true} nextButtonDisabled={false} onPreviousClick={() => console.log('prev')} onNextClick={() => console.log('next')}/></td></tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Products;