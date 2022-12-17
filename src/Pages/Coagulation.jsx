import React from 'react';
import Image from "../Components/Images";

export default function Coagulation() {
  return (
    <div className='container font-regu'>
      <div className='text-red text-4xl font-semibold'>قسم Coagulation</div>

      <div className='text-2xl font-semibold mt-5'><span className='text-red'>أولا: </span>فتح الجهاز</div>
      <Image className='w-80 m-auto mt-2' src='images/coagulation-open.jpg' alt='img' />
      <div className='text-center'>coagulation</div>

      <div className='flex justify-center'>
        <div>
          <Image className='w-24 h-20' src='images/coagulation-open-one-two.jpg' alt='img' />
          <div className='text-center'>1 & 2</div>
        </div>
        <div>
          <Image className='w-24 h-20' src='images/coagulation-open-three.jpg' alt='img' />
          <div className='text-center'>3</div>
        </div>
        <div>
          <Image className='w-24 h-20' src='images/coagulation-open-four.jpg' alt='img' />
          <div className='text-center'>4</div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div>
          <Image className='w-32 h-20' src='images/coagulation-open-five.jpg' alt='img' />
          <div className='text-center'>5</div>
        </div>
        <div>
          <Image className='w-32 h-20' src='images/coagulation-open-six.jpg' alt='img' />
          <div className='text-center'>6</div>
        </div>
      </div>

      <div className='text-xl mt-3'>إزالة الأغطية ثم فتح الجهاز كما هو موضح في الصورة ثم كتابة كلمة السر</div>

      <div className='text-2xl font-semibold mt-7'><span className='text-red'>ثانيا: </span>تجهيز ال reagents وال control</div>
      <div className='text-xl mt-3'><span className='text-red font-semibold'>Reagents: </span><br />1- Clean: وهو عبارة عن محلول جاهز يستخدم لتنظيف ال probe<br />2- Ca Chloride: وهو عبارة عن محلول جاهز يستخدم في فحص APTT<br />3- Daptin: ويأتي في شكل powder نضيف له 2ml من DW ويستخدم في فحص APTT<br />4- Technoplastin: يأتي في شكل powder نضيف له 2ml من DW ويستخدم في فحص PT</div>
      <div className='text-xl mt-2'><span className='text-red font-semibold'>Control: </span>يأتي في شكل powder نضيف له 1ml من DW ويستخدم في عمل control قبل فحص العينات لمقارنة نتيجته مع نتيجة كل عينة</div>
      <div className='flex justify-center mt-2'>
        <div>
          <Image className='w-28 h-20' src='images/clean.jpg' alt='img' />
          <div className='text-center'>Clean</div>
        </div>
        <div>
          <Image className='w-48 h-20' src='images/dw-control-technoplastin.jpg' alt='img' />
          <div className='text-center'>DW&Control&Technoplastin</div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div>
          <Image className='w-24 h-20' src='images/daptin.jpg' alt='img' />
          <div className='text-center'>Daptin</div>
        </div>
        <div>
          <Image className='w-24 h-20' src='images/ca-chloride.jpg' alt='img' />
          <div className='text-center'>Ca Chloride</div>
        </div>
      </div>

      <div className='text-2xl font-semibold mt-7'><span className='text-red'>ثالثا: </span>عمل control</div>
      <div className='text-xl mt-3'>قبل عمل ال control يجب التأكد أن الجهاز يعمل بشكل جيد عن طريق الذهاب إلى قسم Hardware ثم اختيار Prime Pumps وضغط enter</div>
      <div className='mt-2'>
        <Image className='w-80 m-auto' src='images/prime-pumps.jpg' alt='img' />
        <div className='text-center'>عمل Prime Pumps</div>
      </div>

      <div className='text-red mt-3 text-2xl font-semibold'>عمل control:</div>
      <div className='text-xl mt-3 font-semibold'><span className='text-red'>1- </span>مواقع ال reagents وال control:</div>
      <div className='text-xl mt-1'>Ca Chloride في رقم 4</div>
      <div className='text-xl mt-1'>Daptin في رقم 13</div>
      <div className='text-xl mt-1'>Technoplastin في رقم 16</div>
      <div className='text-xl mt-1'>Control في رقم 1</div>
      <div className='mt-2'>
        <Image className='w-80 h-52 m-auto' src='images/coagulation-rack.jpg' alt='img' />
        <div className='text-center'>مواقع ال reagents وال control</div>
      </div>
      <div className='mt-3 text-xl'>يجب الانتباه إلى حجم ال container بالنسبة لل reagents وال control</div>
      <div className='mt-2'>
        <Image className='w-60 h-40 m-auto' src='images/coagulation-container2.jpg' alt='img' />
        <div className='text-center'>حجم ال container الصحيح</div>
      </div>

      <div className='text-xl mt-3 font-semibold'><span className='text-red'>2- </span>تعديل start</div>
      <div className='text-xl mt-2'>بعد وضع ال rack في مكانه الصحيح، الذهاب إلىQC وتغيير start ل yes في الخيارين في حال توفر كل ال reagents<br />أو تغيير start ل yes في الأولى فقط في حال توفر ال thromboplastin فقط <br />الرجوع إلى قسم QC بالضغط على ESC</div>
      <div className='flex justify-center mt-2'>
        <div>
          <Image className='w-52 h-20' src='images/QC-start.jpg' alt='img' />
          <div className='text-center'>تعديل start</div>
        </div>
        <div>
          <Image className='w-28 h-20' src='images/start.jpg' alt='img' />
          <div className='text-center'>تغيير start ل yes</div>
        </div>
      </div>

      <div className='text-xl mt-3 font-semibold'><span className='text-red'>3- </span>التشغيل</div>
      <div className='text-xl mt-2'>يبدأ تشغيل الفحص عند الضغط على F2 عند ال QC أو بالضغط مباشرة على F4</div>

      <div className='text-xl mt-3 font-semibold'><span className='text-red'>4- </span>تسجيل نتيجة ال control</div>
      <div className='text-xl mt-2'>الذهاب إلى run display لتسجيل النتيجة<br />نتيجة ال control لفحص pt هي نتيجة A<br />نتيجة ال control لفحص aptt هي نتيجة B</div>
      <div className='mt-2'>
        <Image className='w-80 m-auto' src='images/control-result.jpg' alt='img' />
        <div className='text-center'>تسجيل النتيجة</div>
      </div>
      <div className='text-xl mt-2'><span className='text-red font-semibold'>ملاحظة: </span>في حال توفر كل ال reagents تظهر نتيجة B وهي فحص aptt أولا، ثم نتيجة A وهي نتيجة فحص pt و INR ثانيا<br /> أما في حال توفر ال thromboplastin فقط تظهر نتيجة A فقط</div>


      <div className='text-2xl font-semibold mt-7'><span className='text-red'>رابعا: </span>تجهيز الدفتر</div>
      <div className='text-xl mt-3'>كتابة اليوم والتاريخ وعمل جدول بالبيانات (اسم الفحص واسم المريض ورقم الكمبيوتر ونتيجة الفحص) وعمل تسجيل آخر في ورقة لتنظيم العمل بالبيانات (الرقم، هل يأخذ أدوية سيولة الدم, اسم المريض، رقم الكمبيوتر، نتيجة الفحص)</div>
      <div className='text-xl mt-2'>تسجيل نتيجة ال control على دفتر وورقة التسجيل</div>
      <div className='flex justify-center mt-2'>
        <div>
          <Image className='w-40 h-20' src='images/coagulation-registraion.jpg' alt='img' />
          <div className='text-center'>دفتر التسجيل</div>
        </div>
        <div>
          <Image className='w-40 h-20' src='images/coagulation-registration2.jpg' alt='img' />
          <div className='text-center'>ورقة التسجيل</div>
        </div>
      </div>

      <div className='text-2xl font-semibold mt-7'><span className='text-red'>خامسا: </span>عمل الفحص</div>
      <div className='text-xl font-semibold mt-3'><span className='text-red'>1- </span>تسجيل بيانات المريض</div>
      <div className='text-xl mt-2'>تسجيل بيانات المريض في دفتر وورقة التسجيل</div>
      <div className='mt-2'>
        <Image className='w-60 m-auto' src='images/coagulation-registration3.jpg' alt='img' />
        <div className='text-center'>تسجيل بيانات المريض</div>
      </div>

      <div className='text-xl font-semibold mt-3'><span className='text-red'>2- </span>فصل العينة</div>
      <div className='text-xl mt-2'>التأكد من أن العينة ليست أقل من الحجم المطلوب</div>
      <div className='text-xl mt-2'>وضع العينة في ال centrifuge للفصل وعمل balance</div>
      <div className='mt-2'>
        <Image className='w-40 h-40 m-auto' src='images/centrifuge.jpg' alt='img' />
        <div className='text-center'>فصل العينة</div>
      </div>
      <div className='text-xl mt-2'>بعد الفصل، التأكد من أن العينة لا يوجد بها hemolysis</div>
      <div className='mt-2'>
        <Image className='w-40 h-40 m-auto' src='images/after-centrifuge.jpg' alt='img' />
        <div className='text-center'>فصل العينة</div>
      </div>
      <div className='text-xl mt-2'>رفض العينة إذا كانت أقل من الحجم المطلوب أو تحتوي على hemolysis</div>

      <div className='text-xl font-semibold mt-3'><span className='text-red'>3- </span>تسجيل اسم المريض ونوع الفحص</div>
      <div className='text-xl mt-2'>الانتقال إلى قسم Sample Prep. ثم كتابة الاسم ونوع الفحص a أو b أو ab في حالة طلب فحص pt و aptt</div>
      <div className='mt-2'>
        <Image className='w-80 h-40 m-auto' src='images/name-test.jpg' alt='img' />
        <div className='text-center'>كتابة اسم المريض ونوع الفحص</div>
      </div>

      <div className='text-xl font-semibold mt-3'><span className='text-red'>4- </span>وضع العينة للفحص</div>
      <div className='text-xl mt-2'>وضع العينة في نفس الرقم الذي تم به تسجيل اسم ونوع الفحص للمريض</div>
      <div className='text-xl mt-2'><span className='text-red font-semibold'>مثال: </span>إذا تم تسجيل اسم ونوع الفحص لمريض في رقم  1 في الجهاز يجب وضع العينة في الموقع رقم 1</div>
      <div className='mt-2'>
        <Image className='w-80 h-60 m-auto' src='images/sample-position.jpg' alt='img' />
        <div className='text-center'>وضع العينة في المكان الصحيح</div>
      </div>
      
      <div className='text-xl font-semibold mt-3'><span className='text-red'>5- </span>تشغيل الفحص</div>
      <div className='text-xl mt-2'>بعد وضع العينة في مكانها الصحيح، يتم تشغيل الفحص بالضغط على enter ثم F2</div>
      <div className='text-xl mt-2'>يمكن تسجيل أكثر من مريض ووضع عيناتهم ثم تشغيل الفحص ولكن يجب الانتباه إلى تطابق رقم تسجيل ووضع كل عينة</div>

      <div className='text-2xl font-semibold mt-7'><span className='text-red'>سادسا: </span>تسجيل النتيجة</div>
      <div className='text-xl mt-2'>بعد انتهاء الفحص، الذهاب إلى قسم results واختيار اسم المريض والضغط على enter لرؤية النتيجة ثم تسجيلها</div>
      <div className='mt-2'>
        <Image className='w-80 h-40 m-auto' src='images/coagulation-result2.jpg' alt='img' />
        <div className='text-center'>صفحة النتائج</div>
      </div>


      <div className='mt-12 text-2xl text-red font-semibold'>إغلاق البرنامج والجهاز</div>
      <div className='text-xl mt-3'>نهاية اليوم وبعد الانتهاء من جميع العينات، لغلق البرنامج التوجه إلى قسم exit وضغط enter, عدم كتابة كلمة السر والمرور مرة أخرى ولكن إغلاق الجهاز</div>
      <Image className='w-80 h-40 m-auto mt-2' src='images/exit-coagulation.jpg' alt='img' />
      <div className='text-center'>الخروج من البرنامج</div>

      <div className='text-xl mt-3'>إغلاق الجهاز يكون بنفس خطوات فتح الجهاز ولكن الترتيب بالعكس</div>
      <Image className='w-80 h-40 m-auto mt-2' src='images/shutdown-coagulation.jpg' alt='img' />
      <div className='text-center'>إغلاق الجهاز</div>

      <div className='text-xl mt-3'>إخراج العينات والتخلص منها، والتخلص من ال waste</div>
      <Image className='w-80 h-40 m-auto mt-2' src='images/waste.jpg' alt='img' />
      <div className='text-center mb-20'>التخلص من ال waste</div>
    </div>
  )
}
