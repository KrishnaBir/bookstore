import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div id="my_modal_3" className="border-[2px] rounded-md p-5 shadow-md w-[600px] relative ">
          <div className="">
            <form method="div">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input type="text"
                placeholder="Enter fullname"
                className='w-80 px-3 py-1 border outline-none rounded-md'
              />
            </div>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email"
                placeholder="Enter your email"
                className='w-80 px-3 py-1 border outline-none rounded-md'
              />
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="text"
                placeholder="Enter your password"
                className='w-80 px-3 py-1 border outline-none rounded-md'
              />
            </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
              <p>
                have account?
                <Link
                  to={"/"}
                  className='underline text-blue-500 cursor-pointer'>Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>


  )
}

export default Signup
