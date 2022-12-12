import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from "../Components/Images";

export default function Home() {
  return (
    <div className='container font-regu'>
        <div className='text-2xl text-red mb-9 font-semibold'>مستشفى السلاح الطبي - المعمل المركزي</div>
        <div className='align-center'>
            <Image className='w-[100%] md:w-[80%] h-80 m-auto' src='images/almarkazy.jpg' alt='img' />
            <div className='text-center'>المعمل المركزي</div>
        </div>
        <div className='text-3xl text-red mt-9 mb-3 font-semibold'>فكرة الموقع:</div>
        <div className='text-xl'>فكرة هذا الموقع هو شرح الفحوصات المعملية التي تخص قسم الهيماتولوجي في المعمل المركزي لمستشفى السلاح الطبي</div>
        <div className='text-2xl font-semibold text-red mt-9 mb-3'>أقسام قسم الهيماتولوجي:</div>
        <div className='text-xl mb-6'>
        <NavLink to='batch'><span className='text-red font-semibold'>1- </span>Batch</NavLink><br />
        <NavLink to='registration'><span className='text-red font-semibold'>2- </span>Registration & ESR</NavLink><br />
        <NavLink to='cbc'><span className='text-red font-semibold'>3- </span>CBC</NavLink><br />
        <NavLink to='abnormal'><span className='text-red font-semibold'>4- </span>Abnormal</NavLink><br />
        <NavLink to='coagulation'><span className='text-red font-semibold'>5- </span>Coagulation</NavLink><br />
        <NavLink to='special'><span className='text-red font-semibold'>6- </span>Special</NavLink><br />
        </div>
        <NavLink className='text-red mr-4 text-xl font-semibold' to='result'>Result</NavLink>

        <Image className='w-80 h-40 m-auto mt-12' src='images/sample=human.jpg' alt='img' />
        <div className='text-center mb-20'>العينة = إنسان</div>
    </div>
  )
}
