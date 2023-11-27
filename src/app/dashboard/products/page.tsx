import React from 'react';
import Products, {IProduct} from "@components/dashboard/products";

const fetchProducts = async (query: string) => {
    try {
         const products = await fetch(`${process.env.LOCAL_PATH}/api/products${query ? '?query=' + query : ''}`);
         return products.json();
    } catch (e) {
        console.error(e)
    }
}

interface ISearchParamsWithQuery {
    searchParams: {
        query: string
    }
}

const Page = async ({searchParams}: ISearchParamsWithQuery) => {
    const products = await fetchProducts(searchParams.query) as unknown as IProduct[];
    return <Products products={products}/>
};

export default Page;