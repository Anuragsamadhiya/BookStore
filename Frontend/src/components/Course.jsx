import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from "react-router-dom"
export default function Course() {
  return (
    <>
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px:4 mt-0 '>
    <div className='  pt-20 items-center justify-center text-center '>
        <h1 className=' mt-10 text-2xl md:text-4xl p-2'>We're delighted to have you <span className='text-red-600'>Here! :)</span></h1>
        <p className='mt-5 p-2'> The warm, inviting ambiance, filled with the scent of freshly printed pages and the soft rustle of turning leaves, welcomes every visitor. Shelves lined with an array of books, from timeless classics to modern bestsellers, invite exploration and discovery.Whether you’re searching for a gripping mystery, an inspiring biography, or a whimsical children’s story, our bookstore offers a treasure trove of literary delights that promise to captivate and inspire readers of all ages. </p>
       <Link to='/'> <button className=' mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800'>Back</button></Link>
    </div></div>
    <div className='mt-8 grid grid-cols-1 md:grid-cols-4 p-5'>
    {list.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
    </div>
    
    </>
  )
}
