'use client'
import React, {ChangeEvent, useState} from 'react';
import Search from "@ui/Search";
import Link from "next/link";
import ProductItem from "@components/dashboard/products/ProductItem";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import {IFetchProducts} from "@app/dashboard/products/page";
import PaginationProducts from "@components/dashboard/products/PaginationProducts";

export interface IProduct {
    id: number,
    image: string,
    title: string,
    description: string,
    price: number,
    created: Date,
    stock: number,
}

interface IProps extends IFetchProducts {
}


const Products = ({products, productsAmount, take}: IProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState<boolean>(true);
    const {replace} = useRouter();

    React.useEffect(() => {
        replace(pathname);
    }, [])

    const handleInput = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (e.target.value) {
            params.set('query', e.target.value);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params}`);
    }, 500)

    const disableLoadingWithDebounce = useDebouncedCallback(() => {
        setLoading(false)
    }, 300)

    React.useEffect(() => {
        disableLoadingWithDebounce();
    }, [products])

    const renderSkeleton = () => (
        <tr>
            <td colSpan={6}><Skeleton count={take} height={42}
                                      className='opacity-20 dark:opacity-40 [&:not(:first-child)]:mt-2.5'/></td>
        </tr>
    )

    return (
        <div className='flex flex-col gap-y-2.5 custom-container mt-5'>
            <div className='flex flex-row justify-between items-center'>
                <Search inputEvent={handleInput} placeholder='Search for a products'/>
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
                    loading
                        ? renderSkeleton()
                        : products.map(product => <ProductItem key={product.id} description={product.description}
                                                               created={product.created}
                                                               stock={product.stock} id={product.id}
                                                               image={product.image}
                                                               title={product.title}
                                                               price={product.price}/>)
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={6}><PaginationProducts productsAmount={productsAmount} take={take} /></td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Products;