import React from 'react';
import Products, {IProduct} from "@components/dashboard/products";

const fetchProducts = async (query: string, page: string) => {
    try {
         const products = await fetch(`${process.env.LOCAL_PATH}/api/products?page=${page ? page : 1}${query ? '&query=' + query : ''}`, {cache: 'no-store'});
         return products.json();
    } catch (e) {
        console.error(e)
    }
}

interface ISearchParamsWithQuery {
    searchParams: {
        query: string,
        page: string
    }
}

export interface IFetchProducts {
    products: IProduct[],
    productsAmount: number,
    take: number
}

const Page = async ({searchParams}: ISearchParamsWithQuery) => {
    const {products, productsAmount, take} = await fetchProducts(searchParams.query, searchParams.page) as unknown as IFetchProducts;
    // revalidatePath('/dashboard/products');
    return <Products products={products} productsAmount={productsAmount} take={take}/>
};

export default Page;