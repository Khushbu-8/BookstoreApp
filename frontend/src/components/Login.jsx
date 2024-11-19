import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='pt-3'>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register("email", { required: true })} id="email" type="email" placeholder="Email" />
                                 {errors.email && <span className='text-pink-500'>This field is required</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                {...register("password", { required: true })} id="password" type="password" placeholder="Password" />
                                 {errors.password && <span className='text-pink-500'>This field is required</span>}
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>

                        <Link class="mt-4 text-center text-gray-600 text-sm" to={'/signup'}>
                            Don't have an account?
                            <a href="#" class="text-pink-500 hover:text-pink-700">Sign up</a>
                        </Link>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
