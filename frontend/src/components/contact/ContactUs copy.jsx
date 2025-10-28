import React from 'react'
import { useForm } from "react-hook-form"

export default function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='pt-40 max-w-md mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-4 space-y-3'>
                <h2 className='text-3xl font-semibold'>Contact Us</h2>

                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder='Enter your name'
                        className='border px-2 py-1 w-full'
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder='Enter your email'
                        className='border px-2 py-1 w-full'
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder='Type your message'
                        className='border px-2 py-1 w-full h-40 resize-none'
                        {...register("message", { required: true })}
                    />
                    {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                </div>

                <button
                    type='submit'
                    className='px-3 py-2 bg-blue-500 text-white rounded-xl'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
