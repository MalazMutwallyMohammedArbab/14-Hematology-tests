import React from 'react'
import Image from "../Components/Images";

export default function Batch() {
  return (
    <div className='container font-regu'>
      <div className='text-4xl text-red font-semibold'>قسم ال Batch:</div>
      <div className='text-xl mt-3'>استلام العينات ونقلها إلى المعمل</div>
      <div className='my-3'>
        <Image className='w-80 m-auto' src='images/batch.jpg' alt='img' />
        <div className='text-center'>الباتش</div>
      </div>
      <div className='text-red text-xl font-semibold mb-3'>1- إعطاء رقم باتش مميز لكل مريض:</div>
      <div className='text-xl mb-1'>لا يبدأ ترقيم الباتش من 1 كل يوم ولكنه يستمر تصاعديا كل يوم فأول خطوة هي أن تطلع على آخر رقم باتش في اليوم السابق. <br /> ورقم الباتش مهم في فحوصات CBC, BF, ESR test, Reticulocyte count, Sickiling test.</div>
      <div className='flex justify-center'>
        <div>
          <Image className='w-40 ml-3' src='images/batch-for-cbc.jpg' alt='img' />
          <div className='text-center'>batch for CBC, ESR</div>
        </div>
        <div>
          <Image className='w-40 mr-3' src='images/batch-for-pt.jpg' alt='img' />
          <div className='text-center'>batch for bleading profile</div>
        </div>
      </div>

      <div className='text-red text-xl font-semibold my-3'>2- استلام العينة والبيانات من المريض:</div>
      <div className='mb-1 text-xl'><span className='text-red font-semibold'>أولا: </span>عند استلام استمارة المريض يجب قراءة الفحوصات والتأكد أنها تابعة لقسم الهيماتولوجي <br /> <span className='text-red font-semibold'>وفحوصات قسم الهيماتولوجي هي: </span>CBC, BF, ESR, Bleading profile(PT, INR, APTT), Sickilng test, Reticulocyte count, Bone marrow biopsy</div>
      <Image className='w-40 m-auto' src='images/pt-test.jpg' alt='img' />
      <div className='text-center'>Test for PT/INR</div>

      <div className='mt-5 mb-1 text-xl'><span className='text-red font-semibold'>ثانيا: </span>يجب التأكد من أن قسم Hematology موجود ضمن ال Labs، وفي حالة لم يكن موجود يطلب من المريض الرجوع لشباك الاستمارات والتعديل على الاستمارة لتتضمن قسم ال Hematology</div>
      <Image className='w-80 m-auto' src='images/heam-department.jpg' alt='img' />
      <div className='text-center'>قسم الهيماتولوجي</div>

      <div className='mt-5 text-xl mb-2'><span className='text-red font-semibold'>ثالثا: </span>بعد التأكد من الفحص ووجود قسم الهيماتولوجي ضمن ال Labs، يجب التأكد من استلام العينة في ال container المناسب للفحص <br /><br />EDTA Container لفحوصات CBC, BF, Sickiling test, Reticulocyte count <br />Trisodium citrate container لفحوصات Bleading profile(pt, aptt) <br />ESR container لفحص ESR</div>
      <Image className='w-80 m-auto' src='' alt='' />
      <div className='text-center'></div>

      <div className='mt-5 text-xl mb-9'><span className='text-red font-semibold'>رابعا: </span>بعد التأكد من كل شيء، يتم أخذ العينة والاستمارة من المريض وتسجيله في ورقة الباتش <br /><br /><span className='text-red'>في حالة كان الفحص المطلوب CBC أو BF أو ESR: </span>يتم سؤال المريض عن عمره واسم الدكتور المعالج واسم القسم وتسجيله في الاستمارة <br /><span className='text-red'>في حالة كان الفحص المطلوب Bleading profile: </span>يتم سؤال المريض هل يأخذ أدوية سيولة أم لا وتسجيله في الاستمارة</div>

      <div className='text-red text-xl font-semibold mb-2'>3- تسجيل البيانات على ورقة الباتش:</div>
      <div className='text-xl'>يتم تسجيل رقم الباتش للمريض وبياناته(اسم المريض، رقم ال lab، الفحوصات المطلوبة) على ورقة الباتش الصحيحة <br />ويجب الانتباه أن ورقة الباتش لفحوصات CBC, BF, ESR, Sickiling test مختلفة عن ورقة الباتش لفحوصات Bleading profile</div>
      <div className='text-xl mt-2'><span className='text-red'>يجب كتابة رقم الباتش للمريض على EDTA container،</span> ويجب التأكد من أن اسم المريض في البيانات هو نفسه اسمه في ال container</div>

      <div className='text-red text-xl font-semibold mb-3 mt-9'>ملاحظات:</div>
      <div className='text-xl'>يتم استلام الاستمارة التي تحتوي على رقم الكمبيوتر (lab_no) مع العينة</div>
      <div className='text-xl'>يطلب أحيانا استلام استمارة الفحص أو الإيصال ويجب التأكد من أن الايصال تابع لقسم الهيماتولوجي</div>

      <div className='text-xl mt-7 mb-2'><span className='text-red font-semibold'>في حالة استفسار المريض من الإجراءات: </span>يتم توجيهه إلى شباك الأرقام لأخذ رقم كمبيوتر, ثم التوجه إلى أخذ ال container المناسب ثم التوجه إلى غرفة سحب الدم ثم إحضار العينة مع الاستمارة</div>
      <div className='text-xl mb-20'><span className='text-red font-semibold'>في حالة استفسار المريض عن نتيجة: </span>يتم توجيهه إلى شباك رقم 1 والسؤال هناك برقم الكمبيوتر</div>
    </div>
  )
}
