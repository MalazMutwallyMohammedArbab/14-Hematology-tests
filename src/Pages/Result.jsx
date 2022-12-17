import React from 'react';
import Image from "../Components/Images";

export default function Result() {
  return (
    <div className='container font-regu'>
      <div className='text-red text-4xl font-semibold'>قسم Results</div>
      <div className='text-xl mt-3'>تسجيل النتائج يكون عن طريق الكمبيوتر ببرنامج</div>
      <Image className='w-80 h-34 mt-2 m-auto' src='images/result-interface.jpg' alt='img' />
      <div className='text-center'>واجهة برنامج تسجيل النتائج</div>

      <div className='text-xl mt-5 font-semibold'><span className='text-red'>Form No 1 </span>هو لتسجيل نتائج Bleading profile</div>
      <div className='text-xl mt-2'>تسجيل بيانات المريض (رقم الكمبيوتر) ثم تسجيل نتائج الفحص المطلوب</div>
      <Image className='w-80 h-34 mt-2 m-auto' src='images/result-of-bleadingprofile.jpg' alt='img' />
      <div className='text-center'>تسجيل النتائج</div>
      <div className='text-xl mt-3'>لحفظ وإرسال النتيجة الضغط على علامة الحفظ، وللخروج من ال form الضغط على علامة x</div>

      <div className='text-xl mt-5 font-semibold'><span className='text-red'>Form No 2 </span>هو لتسجيل نتائج CBC و BF</div>
      <div className='text-xl mt-2'>تسجيل رقم الكمبيوتر للمريض وضغط enter ثم تسجيل نتائج الفحص المطلوب وحفظها لإرسالها</div>
      <Image className='w-80 h-34 mt-2 m-auto' src='images/result-of-cbc.jpg' alt='img' />
      <div className='text-center mb-20'>تسجيل النتائج</div>
    </div>
  )
}
