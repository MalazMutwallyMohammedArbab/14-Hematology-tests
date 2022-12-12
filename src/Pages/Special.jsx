import React from 'react';
import Image from "../Components/Images";

export default function Special() {
  return (
    <div className='container font-regu'>
      <div className='text-[red] text-4xl font-semibold'>قسم Special</div>
      <div className='mt-4 text-2xl font-semibold'><span className='text-[red]'>1- </span>Sickiling test</div>
      <div className='mt-3 text-xl'>يؤخذ كمية بسيطة من sickiling powder وتوضع على container نظيف فارغ, ثم إضافة DW إلى نهاية ال container</div>

      <div className='flex justify-center mt-2'>
        <div>
          <Image className='w-36 h-20' src='images/sickle-powder.jpg' alt='img' />
          <div className='text-center'>Sickle powder</div>
        </div>
        <div>
          <Image className='w-28 h-20' src='images/amount-of-powder.jpg' alt='img' />
          <div className='text-center'>Amount of powder</div>
        </div>
        <div>
          <Image className='w-24 h-20' src='images/dw.jpg' alt='img' />
          <div className='text-center'>DW</div>
        </div>
      </div>

      <div className='mt-3 text-xl'>يؤخذ drop من المحلول في slide ثم drop من عينة دم edta container وعمل mix ب tip أو wooden stick ثم وضع cover glass وقراءته بعدسة 40x</div>

      <div className='text-xl mt-3'>في حالة كانت النتيجة -ve تترك ال slide ساعتين ثم تعاد قراءتها، وإذا كانت -ve توضع ال slide في betri dish فيه شاش مبلول</div>


      <div className='mt-4 text-2xl font-semibold mt-6'><span className='text-[red]'>2- </span>Reticulocyte count</div>
      <div className='mt-3 text-xl'><span className='text-[red] font-semibold'>في حالة Hb normal </span> يؤخذ 1drop من الدم مع 1drop من ال stain</div>
      <div className='mt-2 text-xl'><span className='text-[red] font-semibold'>في حالة Hb low </span> يؤخذ 2drop من الدم مع 1drop من ال stain</div>
      <div className='mt-2 text-xl'><span className='text-[red] font-semibold'>في حالة Hb high </span> يؤخذ 1drop من الدم مع 2drop من ال stain</div>
      <div className='mt-2 text-xl'>في plain container وتترك في water path لمدة 15-20 min</div>
      <div className='text-xl mt-3'><span className='text-[red] font-semibold'>عمل thin blood film </span>ثم حساب ret و rbcs في 10 مربعات (والمربع هو field) كالآتي</div>
      <div className='mt-2 text-xl'>حساب ال ret في كل مربع في ال 10 مربعات، وحساب ret و rbcs في 3 مربعات، ثم حساب المتوسط لل ret ولل rbcs</div>
      <div className='mt-2 text-xl'>rbcs = مجموع العدد / 3</div>
      <div className='mt-2 text-xl'>ret = مجموع العدد / 10</div>
      <div className='mt-2 text-xl'>بعد حساب المتوسط، حساب نسبة ال ret بالنسبة لل rbcs</div>
      <div className='mt-2 text-xl'>ret count = rbcs / ret</div>


      <div className='mt-4 text-2xl font-semibold mt-6'><span className='text-[red]'>3- </span>فحص Bone marrow</div>
      <div className='text-xl mt-3'>أولا يتم أخذ بيانات المريض (اسم المريض كاملا، العمر، السكن الأصلي، السكن الحالي، الأمراض المزمنة، رقم جوال، رقم جوال ثاني)</div>
      <Image className='w-80 h-34 mt-2 m-auto' src='images/information-bm.jpg' alt='img' />
      <div className='text-center'>بيانات المريض</div>

      <div className='mt-3 text-xl'>بعدها يتم أخذ عينة دم من المريض في edta container و plain container وعمل فحوصات cbc و bf و viral screening وتجهيزها قبل يوم العملية وحفظها، وإعطاء المريض أقرب موعد يتواجد فيه الأخصائي لعمل ال bone marrow</div>

      <div className='text-2xl font-semibold text-[red] mt-4'>يوم عملية ال bone marrow</div>
      <div className='text-xl mt-3'><span className='font-semibold text-[red]' >تجهيز الأدوات </span>3-5 syrringes من المحلول المعقم، تجفيفهم والتأكد من عدم وجود أي بقايا للمحلول داخل ال syrringe قبل غلقه</div>
      
      <div className='flex justify-center mt-2'>
        <div>
          <Image className='w-48 h-28' src='images/syrringe-for-bm.jpg' alt='img' />
          <div className='text-center'>Syrringe for BM</div>
        </div>
        <div>
          <Image className='w-32 h-28' src='images/syrringe-for-bm2.jpg' alt='img' />
          <div className='text-center'>إغلاق ال syrringe</div>
        </div>
      </div>
      <div className='text-xl mt-2'>توجد syrringe مخصصة لمرضى HB و HC</div>
      <div className='text-xl mt-2'>تجهيز كمية من الشاش بعد تقطيعه وطيه وتركه في autoclave لمدة ساعة للتعقيم</div>
      <Image className='w-80 h-28 m-auto' src='images/shash-for-bm.jpg' alt='img' />
      <div className='text-center'>تجهيز الشاش</div>

      <div className='text-xl mt-3 font-semibold text-[red]'>تجهيز الدفتر</div>
      <div className='text-xl mt-2'>عمل جدول بالبيانات (رقم المريض، اسم المريض، فحوصات (cbc و bf)، stain, biopsy)</div>
      <div className='text-xl mt-2'>رقم المريض يكتب بترتيب تصاعدي ثم علامة / ثم رقم السنة، ويبدأ من رقم 1 في بداية السنة الجديدة</div>
      <Image className='w-80 h-40 mt-2 m-auto' src='images/registration-for-bm.jpg' alt='img' />
      <div className='text-center'>تجهيز الدفتر</div>

      <div className='text-[red] text-xl mt-4 font-semibold'>أثناء عملية ال BM</div>
      <div className='text-xl mt-2'>يتم عمل 9 أفلام دم من ال spiration <br />ويوضع ال biopsy في container</div>
      <Image className='w-80 h-40 mt-2 m-auto' src='images/9bloodfilm-for-bm.jpg' alt='img' />
      <div className='text-center'>blood films of aspiration & biopsy</div>
      <div className='text-xl mt-3'>بعد جف الأفلام يكتب رقم المريض على ال slide بقلم رصاص ثم تصبغ ب stain مثل lishman stain</div>
      <Image className='w-80 h-40 mt-2 m-auto' src='images/writing-num-on-film.jpg' alt='img' />
      <div className='text-center'>كتابة رقم المريض على ال slide</div>
      <div className='text-xl mt-2 mb-20'>يؤخذ ال biopsy مع استمارة المريض وبياناته (الاسم، محل السكن، الرقم) لقسم الهستوباثولوجي</div>
    </div>
  )
}
