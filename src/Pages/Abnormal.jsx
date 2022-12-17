import React from 'react';
import Image from "../Components/Images";

export default function Abnormal() {
  return (
    <div className='container font-regu'>
      <div className='text-4xl text-red font-semibold'>قسم Abnormal</div>
      <div className='text-2xl mt-4'>جر أفلام الدم وصبغها والتأكد من جودتها</div>

      <div className='text-3xl text-red font-semibold mt-5'>1- تجهيز المكان</div>
      <div className='text-xl mt-3 mb-2'>تنظيف ال bench بالكحول ثم وضع 4 ورقات بيضاء نضيفة ولصقهم على ال bench ثم تجهيز الأدوات (Slides, Pipettes, Tips, Rack, Slides rack, Pencil, Plaster, Gauze)</div>
      <Image className='w-80 m-auto' src='images/abnormal-place.jpg' alt='' />
      <div className='text-center'>تجهيز المكان</div>

      <div className='text-3xl text-red font-semibold mt-5'>2- تجهيز الدفتر</div>
      <div className='text-xl mt-3 mb-2'>كتابة اليوم والتاريخ وعمل جدول بالبيانات (رقم الباتش واسم المريض وعمره وFilm وStain)</div>
      <Image className='w-80 m-auto' src='images/abnormal-paper.jpg' alt='' />
      <div className='text-center'>تجهيز الدفتر</div>

      <div className='text-3xl text-red font-semibold mt-5'>3- تجهيز ال Stain وال Buffer</div>
      <div className='text-xl mt-3 mb-4'>ال stain مثل giemsa و lishman و right وغالبا يتم استخدام lishman stain</div>
      <div className='text-2xl font-semibold mb-3 text-red'>تجهيز ال stain:</div>
      <div className='text-xl mb-2'>احضار container نظيف ووضع 2 filter paper عليه بعد طيه بالطريقة المناسبة (طيه للنصف ثم طيه مرة أخرى للربع ثم فتح جزء واحد ووضعه على ال container)، سكب lishman stain على غطاء ال stain ثم سكبه ببطء على ال container</div>
      <Image className='w-80 m-auto' src='images/stain-preparing.jpg' alt='' />
      <div className='text-center'>تجهيز ال stain</div>

      <div className='text-2xl font-semibold mb-3 mt-4 text-red'>تجهيز ال Buffer:</div>
      <div className='text-xl mb-2'>أخذ كمية 3.76g من Na2HPO4 powder مع 2.1g من KH2PO4 powder في container نظيف فارغ وحلهم في كمية 1000ml DW</div>
      <div className='mb-2 text-xl'>في حالة عدم وجود ميزان يمكن أخذ كميات تقريبية</div>
      <div className='flex justify-center'>
        <div>
          <Image className='w-40 h-32' src='images/buffer-powder.jpg' alt='' />
          <div className='text-center'>Na2HPO4 & KH2PO4</div>
        </div>
        <div>
          <Image className='w-40 h-32' src='images/buffer.jpg' alt='' />
          <div className='text-center'>powders & DW</div>
        </div>
      </div>

      <div className='text-3xl text-red font-semibold mt-5'>4- جر الأفلام</div>
      <div className='text-xl mt-3 mb-2'>يتم أخذ كمية قليلة من الدم بواسطة ال pipette ثم وضع كمية قليلة من الدم على ال slide قريب قليلا من الحافة ثم يتم عمل مسحة الدم بواسطة ال spreader ولا يتم رفع ال spreader حتى الوصول إلى نهاية ال slide</div>
      <Image className='w-80 m-auto' src='images/blood-film.jpg' alt='' />
      <div className='text-center'>blood film</div>
      <div className='text-red text-xl mt-3 mb-3 font-semibold'>يوجد نوعين من ال slide:</div>
      <div className='text-xl mb-2'>نوع frosted edge وهذا يكتب عليه رقم الباتش أو اسم المريض قبل جر الفلم ويستخدم ك spreader</div>
      <div className='text-xl mb-2'>نوع glass end وهذا يتم انتظاره حتى يجف الفلم ثم كتابة رقم الباتش أو الاسم بالقلم الرصاص في بداية الفلم</div>
      <Image className='w-40 h-44 m-auto' src='images/blood-film2.jpg' alt='' />
      <div className='text-center'>blood film</div>

      <div className='text-3xl text-red font-semibold mt-5'>5- مرحلة الصبغ</div>
      <div className='text-xl mt-3 mb-2'>قبل صبغ الأفلام يجب عمل control لتحديد الطريقة والزمن الأفضل للصبغ</div>
      <div className='text-xl mb-2'>ليس هناك طريقة واحدة فقط لصبغ الأفلام ولكن أكثر طريقة مستخدمة هي lishman stain لمدة 3 دقائق ثم buffer لمدة 7 دقائق ويكون ضعف كمية ال stain ثم غسل ال slide بماء مفلتر</div>
      <Image className='w-80 m-auto' src='images/bf-stain.jpg' alt='' />
      <div className='text-center'>blood film stain</div>
      <div className='text-xl my-3'><span className='text-red font-semibold'>ملاحظة </span>يجب ملاحظة عدم نشف ال stain على ال slide (بسبب وضعه المائل أو بسبب المروحة) لأن هذا يسبب وجود رواسب deposits تصعب رؤية الفلم</div>
      <div className='text-xl mb-2'><span className='text-red font-semibold'>في حالة بهتان لون الصبغة </span>خلط كمية متساوية من giemsa stain و DW وصبغ الفلم لمدة 10 دقائق ثم غسله بماء مفلتر</div>
      <div className='text-xl mb-2'>الانتظار حتى يجف ال stain ثم مسح الجزء الخلفي من ال slide بشاش نظيف</div>

      <div className='text-3xl text-red font-semibold mt-7'>6- مرحلة التأكد من جودة الفلم</div>
      <div className='text-xl mt-3 mb-2'>بعد التحقق من جودة الفلم ظاهريا باللون يتم التحقق بواسطة الميكروسكوب بعدسة 40 ثم عدسة 100</div>
      <div className='flex justify-center'>
        <div>
          <Image className='w-40 h-40' src='images/bf-40x.jpg' alt='' />
          <div className='text-center'>blood film 40x</div>
        </div>
        <div>
          <Image className='w-40 h-40' src='images/bf-100x.jpg' alt='' />
          <div className='text-center'>blood film 100x</div>
        </div>
      </div>
      <div className='text-xl my-2'>بعد التأكد من جودة الفلم يتم وضع ملصق على ال silde يكتب فيه رقم الباتش للمريض أو اسمه</div>
      <div className='text-xl mb-5'>توضع كل ال slides في box وتعطى للأخصائية مع استمارة المريض، وال CBC في حالة طلبه في الفحص</div>
      <div className='text-xl mb-20'><span className='text-red font-semibold'>ملاحظة </span><br />يتم الاحتفاظ ب slide واحد أو اثنين لكل عينة في box، وكتابة اليوم والتاريخ و احتياطي abnormal على ال box، ووضعه في درج ال abnormal</div>
    </div>
  )
}
