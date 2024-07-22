import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box  dark:bg-slate-800 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</Link>
    <h3 className="font-bold text-lg">Login!</h3>
    {/* email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='  dark:text-black w-80 px-3 py-1 border rounded-md outline-none '    
           {...register("email", { required: true })} />
           <br />
         {errors.email && <span className='text-sm text-red-800'>This field is required</span>}

    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter your Password'
         className='w-80 px-3 py-1 dark:text-black border rounded-md outline-none'
         {...register("password", { required: true })}  
         />
         <br />
                  {errors.password && <span className='text-sm text-red-800'>This field is required</span>}

  
    </div>
    {/* Login button */}
    <div className='flex justify-around mt-10'>
        <button className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-800'>Login</button>
        <p>Not registered?<Link to='/signup' className='cursor-pointer underline text-blue-500'>signup</Link></p>
    </div>
    </form>

  </div>
</dialog>
    </div>
  )
}
