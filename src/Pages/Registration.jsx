import React from 'react';
import Image from "../Components/Images";

export default function Registration() {
  return (
    <div className='container font-regu'>
      <div className='text-3xl text-[red] font-semibold'>قسم Registration & ESR:</div>
      <Image className='w-80 m-auto mt-6' src='images/registration-place.jpg' alt='' />
      <div className='text-center'>Registration place</div>

      <div className='text-2xl text-[red] mt-7 mb-3 font-semibold'>1- Registration:</div>
      <div className='text-xl mb-5'><span className='text-[red] font-semibold'>تجهيز الدفتر: </span>كتابة التاريخ واليوم وعمل جدول بالبيانات (رقم الباتش، اسم المريض، رقم الكمبيوتر، الفحوصات المطلوبة)</div>
      <Image className='w-80 m-auto' src='images/registration.jpg' alt='img' />
      <div className='text-center'>Registration</div>

      <div className='text-xl my-5'>بعد إحضار العينات من الباتش إلى داخل المعمل <span className='text-[red]'>يتم التأكد من تطابق البيانات في الاستمارة مع ال container لكل مريض، <br /> إذا لم تتطابق البيانات يتم الرجوع للباتش والتعديل </span>وإذا تطابقت يتم تسجيل بيانات المريض (رقم الباتش واسم المريض ورقم الكمبيوتر والفحص المطلوب) في الدفتر</div>

      <div className='text-xl mb-3'><span className='text-[red] font-semibold'>أولا: في حالة كان الفحص المطلوب هو CBC: <br /></span>يتم إعطاء العينة للشخص المسؤول عن عمل فحص ال  CBC</div>
      <div className='text-xl mb-3'><span className='text-[red]'>إذا كانت نتيجة فحص ال CBC طبيعية </span>يتم تدبيس النتيجة مع الاستمارة وإعطائها للمسؤول عن تسجيل النتيجة في الكمبيوتر</div>
      <div className='text-xl'><span className='text-[red]'>إذا كانت نتيجة فحص ال CBC غير طبيعية </span>يتم كتابة الاختصار ab بجانب اسم المريض في دفتر التسجيل ويتم إعطاء النتيجة مع الاستمارة مع العينة للمسؤول عن ال Abnormal</div>

      <div className='text-xl my-7'><span className='text-[red] font-semibold'>ثانيا: في حالة كان الفحص المطلوب هو BF: <br /></span>يتم إعطاء استمارة المريض مع العينة للشخص المسؤول عن ال Abnormal</div>

      <div className='text-xl mb-7'><span className='text-[red] font-semibold'>ثالثا: في حالة كان الفحص المطلوب هو Sickiling test أو Reticulocyte count: <br /></span>يتم إعطاء استمارة المريض مع العينة للشخص المسؤول عن ال Special</div>

      <div className='text-xl mb-7'><span className='text-[red] font-semibold'>رابعا: في حالة كان الفحص المطلوب هو ESR: <br /></span>يتم تسجيل البيانات مرة أخرى في دفتر مختلف وهو مخصص لفحص ESR والبيانات هي (رقم الباتش واسم المريض وزمن قراءة الفحص والنتيجة)</div>

      <div className='text-2xl text-[red] mb-3 font-semibold'>2- فحص ESR:</div>
      <Image className='w-80 m-auto' src='images/esr-test.jpg' alt='img' />
      <div className='text-center'>ESR = 85 mmol / 1/2 hr</div>

      <div className='text-xl mt-7 mb-3'>بعد وضع العينة في الحامل يتم تشغيل المؤقت لمدة نصف ساعة وبعد أن تنتهي النصف ساعة يتم قراءة النتيجة وتسجيلها في الدفتر المخصص لل ESR وتسجيل النتيجة في استمارة المريض</div>
      <Image className='w-80 m-auto' src='images/esr-result.jpg' alt='img' />
      <div className='text-center mb-20'>كتابة البيانات وتسجيل نتيجة ESR</div>
    </div>
  )
}
