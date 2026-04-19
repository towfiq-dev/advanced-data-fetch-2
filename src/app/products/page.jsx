import Product from '@/components/product/Product';
import React from 'react';
const productFetch = async()=>{
  const res = await fetch('http://localhost:3004/products', {next: {revalidate: 10}})
  return res.json()
}
const ProductsPage = async() => {
  const getProduct = await productFetch()
  return (
    <div className='grid grid-cols-3 justify-between gap-4 items-center mt-10 max-w-300 mx-auto'>
      {
        getProduct.map((product, index)=> 
        <Product 
        product={product} 
        key={index}>
        </Product>)
      }
    </div>
  );
};

export default ProductsPage;