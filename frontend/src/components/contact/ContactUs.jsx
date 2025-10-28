import React from 'react'
import { useForm } from "react-hook-form"



export default function ContactUs() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example"))

    return (
        <>
            <div className='pt-40 max-w-md  container mx-auto '>




                <div className='p-4 space-y-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='text-3xl text-semi-bold'>Contact Us</div>

                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter fullname"
                                className='w-80 px-3 py-1 border outline-none rounded-md'
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border outline-none rounded-md'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div>
                            <span>Message</span>
                            <br />
                            <input type="text" name="" id="3" placeholder='Type your message' className='border px-2 py-1 w-90 h-40' {...register("password", { required: true })}
                            />
                            
                        </div>

                        <button className='px-3 py-2 bg-blue-500 rounded-xl' >submit</button>
                    </form>
                </div>



            </div>

        </>
    )
}
