import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'


export default function Navbar() {
  return (
    <div className='font-regu container'>
      {/* For Computer */}
      <div className='hidden lg:block lg:flex lg:justify-between lg:items-center lg:my-12'>
        <div className='text-xl text-red font-cairo font-semibold'>المعمل المركزي</div>

        <div className='flex justify-between text-lg w-[65%] '>
          <NavLink className="border-b-2 border-red hover:text-red transition ease-out duration-500 font-semibold" to="/" >الصفحة الرئيسية</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/batch">Batch</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/registration">Registration&ESR</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/cbc" >CBC</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/abnormal">Abnormal</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/coagulation">Coagulation</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/special">Special</NavLink>
          <NavLink className="border-b-2 border-white hover:text-red hover:border-red transition ease-out duration-500" to="/result">Result</NavLink>
        </div>

        <div className='text-xl font-semibold text-red'>قسم أمراض الدم</div>
      </div>

      {/* For Mobile */}
      <div className='lg:hidden border-b p-3 flex justify-between items-center mb-9'>
        <div className='text-xl text-red font-cairo'>المعمل المركزي</div>        
        <Navigation />
      </div>
    </div>
  )
}
