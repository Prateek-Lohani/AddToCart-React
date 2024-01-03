import React from 'react'

const Card = ({cardData,handleClick,index}) => {

    const {image,price,title,added}=cardData;

  return (
   
    <section className='w-60 bg-slate-100 rounded-md relative overflow-hidden'>
        <article className='h-40 w-full '>
            <img  className='w-full h-full object-cover' src={image} alt="" />
        </article>
        <div className='px-4 py-2'>
            <h1 className='text-center text-sm font-semibold'>{title}</h1>
            <h3 className='text-center text-black-500'>{price}</h3>
        </div>
        <button onClick={()=>handleClick(index)} className={`${added?'bg-red-500':'bg-blue-500'} font-medium text-white px-4 py-1 rounded-full left-1/2 relative -translate-x-1/2 mb-2`}>{added?'Remove from Cart':'Add to Cart'}</button>        
    </section>

  )
}

export default Card