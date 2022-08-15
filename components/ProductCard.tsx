import React from 'react';
import Image from 'next/image';

function ProductCard({name, picture, price}: {name: string, picture:string, price: number}) {
  return (
    <section className='p-2'>
      <div className='relative bg-mainRed p-3'>
        <h1 className='z-10 absolute top-2 left-1/2 -translate-x-1/2 mx-auto bg-mainGold rounded-md text-center p-2'>{name}</h1>
      </div>
      <div className='bg-gray-300'>
        <Image className='p-1 relative'src={picture} />
        <p className='text-right mr-2 text-lg font-bold'>${price}</p>
      </div>
    </section>
  )
}

export default ProductCard