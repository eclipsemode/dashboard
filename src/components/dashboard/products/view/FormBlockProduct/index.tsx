import React from 'react';

interface IProps {
    title: string
}

const FormBlockProduct = ({title}: IProps) => {
    return (
        <div className='flex-1 flex flex-col gap-y-5 custom-container'>
            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_title">
                Title
                <input className='custom-input' id='formBlock_product_title' name='title' placeholder='iPhone' type="text"
                       required defaultValue={title}/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_category">
                Category
                <select className='custom-input' name="category" id="formBlock_product_category" defaultValue='default'>
                    <option value="default" disabled>Choose a Category</option>
                    <option value="admin">Computer</option>
                    <option value="phone">Phone</option>
                    <option value="notebook">Notebook</option>
                    <option value="electronics">Electronics</option>
                </select>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_price">
                Price
                <input className='custom-input' id='formBlock_product_price' name='price' placeholder='999' type="number"/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_stock">
                Stock
                <input className='custom-input' id='formBlock_product_stock' name='stock' placeholder='99'
                       type="number"/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_color">
                Color
                <input className='custom-input' id='formBlock_product_color' name='color' placeholder='red'
                       type="text"/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_size">
                Size
                <input className='custom-input' id='formBlock_product_size' name='size' placeholder='XS'
                       type="text"/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_product_description">
                Description
                <textarea className='custom-input' name="description" id="formBlock_product_description" placeholder='Description' cols={30} rows={3}/>
            </label>
            <button className='custom-button-apply' type='submit'>Update
            </button>
        </div>
    );
};

export default FormBlockProduct;