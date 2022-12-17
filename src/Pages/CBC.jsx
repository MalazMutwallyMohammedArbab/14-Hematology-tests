import React from 'react';
import Image from "../Components/Images";

export default function CBC() {
  return (
    <div className='container font-regu'>
      <div className='text-4xl text-red font-semibold'>قسم CBC:</div>
      <div className='text-2xl text-red font-semibold my-5'>1- Mindary CBC</div>

      <div className='text-2xl font-semibold mb-3'><span className='text-red'>أولا: </span>فتح الجهاز</div>
      <Image className='w-80 m-auto' src='images/open-cbc.jpg' alt='img' />
      <div className='text-center mb-3'>mindary CBC</div>

      <div className='flex justify-center'>
        <div>
          <Image className='w-20 h-14' src='images/cbc-open-one.jpg' alt='img' />
          <div className='text-center'>1</div>
        </div>
        <div>
          <Image className='w-20 h-14' src='images/cbc-open2.jpg' alt='img' />
          <div className='text-center'>2</div>
        </div>
        <div>
          <Image className='w-20 h-14' src='images/cbc-open-three.jpg' alt='img' />
          <div className='text-center'>3</div>
        </div>
        <div>
          <Image className='w-20 h-14' src='images/cbc-open-four.jpg' alt='img' />
          <div className='text-center'>4</div>
        </div>
      </div>

      <div className='text-xl mt-5 mb-3'>فتح الجهاز كما هو موضح في الصورة ثم كتابة كلمة السر ثم الانتقال لبرنامج CBC على الكمبيوتر</div>
      <Image className='w-80 h-40 m-auto' src='images/cbc-programe.jpg' alt='img' />
      <div className='text-center'>برنامج ال CBC</div>

      <div className='text-2xl font-semibold mb-3 mt-5'><span className='text-red'>ثانيا: </span>عمل cleaning</div>
      <div className='flex justify-center'>
        <div>
          <Image className='w-40' src='images/cbc-cleanser-one.jpg' alt='' />
          <div className='text-center'>cleanser 1</div>
        </div>
        <div>
          <Image className='w-40' src='images/cbc-cleanser-two.jpg' alt='' />
          <div className='text-center'>cleanser 2</div>
        </div>
      </div>
      <div className='text-xl mt-3 mb-3'>يطلب أحيانا عمل cleaning لل prope عند فتح البرنامج</div>
      <div className='text-xl mb-3'>يوضع ال cleanser تحت ال probe ثم الضغط على الزر الذي يوجد خلف ال prope لأخذ الكمية المطلوبة</div>
      <Image className='w-40 h-40 m-auto' src='images/cbc-probe.jpg' alt='img' />
      <div className='text-center'>عمل cleaning</div>

      <div className='text-2xl font-semibold mt-5 mb-3'><span className='text-red'>ثالثا: </span>عمل الفحص</div>
      <div className='text-xl mb-3'>اختيار الخيار المناسب للفحص يكون على حسب نوع الفحص</div>
      <Image src='images/cbc-tests.jpg' alt='img' />
      <div className='text-center'>خيارات نوع الفحص</div>


      <div className='text-xl mt-5 mb-2'>بعد اختيار نوع الفحص، كتابة رقم الباتش للمريض أو اسم المريض في حالة عدم توفر رقم باتش</div>
      <Image className='w-80 m-auto' src='images/cbc-writing-batch-num.jpg' alt='img' />
      <div className='text-center'>كتابة رقم الباتش للعينة</div>

      <div className='text-xl my-3'>عمل mix جيد للعينة بشكل دائري بدون رج والتأكد من عدم وجود أي clot في العينة يمكن أن يتسبب في غلق ال prope وتوقف البرنامج</div>
      <div className='text-xl mb-2'>فتح غطاء EDTA container ووضع EDTA container تحت ال probe والتأكد من أن ال prope وصل لعينة الدم ثم الضغط مرة واحدة على الزر الذي يوجد خلف ال prope وبعد أخذ كمية الدم يتم إخراج ال container من ال prope وإعادة غلق الcontainer</div>
      <Image className='w-40 h-40 m-auto' src='images/cbc-test.jpg' alt='img' />
      <div className='text-center'>سحب ال probe لكمية الدم المطلوبة</div>

      <div className='text-2xl font-semibold mt-5'><span className='text-red'>رابعا: </span>طباعة النتيجة</div>
      <div className='text-xl mt-3 mb-2'>طباعة النتيجة بالتوجه إلى رقم العينة ثم الضغط بالزر الأيمن للماوس واختيار print</div>
      <Image className='w-80 m-auto' src='images/cbc-print1.jpg' alt='img' />
      <div className='text-center'>طباعة النتيجة 1</div>
      <Image className='w-80 m-auto mt-3' src='images/cbc-print2.jpg' alt='img' />
      <div className='text-center'>طباعة النتيجة 2</div>


      <div className='text-xl mt-5 mb-2'>في حالة عدم الطباعة يتم التأكد من تشغيل الطابعة ووجود ورق الطباعة</div>
      <div className='flex justify-center mb-20'>
        <div>
          <Image className='w-40' src='images/cbc-print-on.jpg' alt='' />
          <div className='text-center'>زر تشغيل الطابعة</div>
        </div>
        <div>
          <Image className='w-40' src='images/cbc-print-paper.jpg' alt='' />
          <div className='text-center'>ورق الطباعة</div>
        </div>
      </div>
    </div>
  )
}
