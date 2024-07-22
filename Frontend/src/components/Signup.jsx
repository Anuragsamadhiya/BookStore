import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-r  from-sky-500 to-indigo-500'>
      <div id=" " className=" dark:bg-slate-800 dark:text-white border-[2px] rounded-md shadow-md w-full  md:w-1/2 	">
  <div className="">
    <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
     <Link to='/'> <button className="btn btn-sm btn-circle btn-ghost absolute w-24 right-2 top-5 bg-black text-white rounded-md">Back </button></Link> 
    <h3 className="font-bold text-lg mb-5 mt-5 ml-4">Signup!</h3>
    
    <div className='ml-5 mt-4 space-y-2 '>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter your Name' className='w-80 px-3 py-1 border rounded-md outline-none'
                         {...register("name", { required: true })}  
/>
<br />
{errors.name && <span className='text-sm text-red-800'>This field is required</span>}
    </div>
    {/* email */}
    <div className=' ml-5 mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
          {...register("email", { required: true })} />
        <br />
        {errors.email && <span className='text-sm text-red-800'>This field is required</span>}

    </div>
    {/* password */}
    <div className=' ml-5 mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
                 {...register("password", { required: true })}  

        />
        <br />
        {errors.password && <span className='text-sm text-red-800'>This field is required</span>}

    </div>
    {/* Login button */}
    <div className='flex justify-around mt-10'>
        <button className='bg-red-500 text-white rounded-md px-3 py-1 mb-5 hover:bg-red-800'>Signup</button>
        <p>Already have an account??<Link onClick={()=>document.getElementById('my_modal_3').showModal()} className='cursor-pointer underline text-red-500'>Login</Link></p>
        <Login/>
    </div>
    </form>

  </div>
</div>
    </div>
  )
}

export default Signup
