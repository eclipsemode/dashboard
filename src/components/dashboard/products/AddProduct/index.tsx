import React from 'react';

const AddProduct = () => {
    return (
        <div className='custom-container mt-5'>
            <form action="" className='flex flex-wrap justify-between gap-y-5'>
                <input type="text" placeholder='Title' name='title' required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <select name="category" id="category" required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'>
                    <option value="general">Choose a Category</option>
                    <option value="computer">Computer</option>
                    <option value="phone">Phone</option>
                    <option value="notebook">Notebook</option>
                    <option value="electronics">Electronics</option>
                </select>
                <input type="number" placeholder='Price' name='price' required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <input type="number" placeholder='Stock' name='stock' className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <input type="text" placeholder='Color' name='color' className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <input type="text" placeholder='Size' name='size' className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <textarea name="description" id="description" cols={30} rows={10} placeholder='Description' className='w-full p-5 rounded-md bg-slate-100 dark:bg-dark-950'></textarea>
                <button className='custom-button-apply' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;