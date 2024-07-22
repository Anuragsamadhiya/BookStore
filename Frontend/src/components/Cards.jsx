import React from 'react'

export default function Cards({item}) {
  return (
    <> 
    <div className=' mt-12 my-3 p-2'>
    <div className="card bg-base-100 w-92 h-96 shadow-xl hover:scale-105 duration-100 dark:bg-slate-900 dark:text-white p-5">
  <figure>
    <img
    className="w-full h-48 object-cover"
      src={item.image}
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.tittle}!
      <div className="badge badge-error">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" hover:bg-red-500  hover:text-white duration-200 cursor-pointer  rounded-full border-[2px] px-2 py-1">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
