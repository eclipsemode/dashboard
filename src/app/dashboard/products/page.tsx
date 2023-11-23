import React from 'react';
import Products, {IProduct} from "@components/dashboard/products";

const fetchProducts = async () => {
    try {
         const products = await fetch(`${process.env.LOCAL_PATH}/api/products`);
         return products.json();
    } catch (e) {
        console.error(e)
    }
}

const Page = async () => {
    const products = await fetchProducts() as unknown as IProduct[];
    return <Products products={products}/>
};

export default Page;