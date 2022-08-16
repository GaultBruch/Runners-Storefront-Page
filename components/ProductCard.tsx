import React from 'react';
import Image from 'next/image';

function ProductCard({name, picture, price}: {name: string, picture:string, price: number}) {
  return (
    <section className='p-2'>
      <div className='relative bg-mainRed p-3'>
        <h1 className='z-10 absolute top-2 left-1/2 -translate-x-1/2 mx-auto bg-mainGold rounded-md text-center p-2'>{name}</h1>
      </div>
      <div className='bg-gray-300 relative'>
        <Image width="100%" height="100%" layout='responsive' src={picture}/>
        <p className='absolute bottom-0 right-0 mr-2 text-lg font-bold'>${price}</p>
      </div>
    </section>
  )
}

export default ProductCard