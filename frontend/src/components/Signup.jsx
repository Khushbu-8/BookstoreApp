import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className="bg-gray-100 flex items-center dark:bg-slate-900 justify-center min-h-screen">
            <div className="modal-box bg-white p-8 rounded-lg shadow-lg w-96">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute text-black right-2 top-2">✕</Link>
                </form>
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            {...register("name", { required: true })}
                            
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="Enter your username"
                        />
                          {errors.name && <span className='text-pink-500'>This field is required</span>}
                          
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email", { required: true })}
                            
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                          {errors.email && <span className='text-pink-500'>This field is required</span>}
                          
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register("password", { required: true })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                          {errors.password && <span className='text-pink-500'>This field is required</span>}
                          
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-500 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <button   onClick={() => document.getElementById('my_modal_3').showModal()}className="text-pink-600 hover:underline">Log in</button>
                    <Login/>
                </p>
            </div>
        </div>
    );
};

export default Signup;