import React from "react";
import Image from "next/image";
const BhookMitao = () => {
  return (
    <div className='flex items-center justify-center h-full w-[90vw] bg-brand-darkGray mx-auto rounded-md my-20'>
        <div className='flex flex-col items-center justify-center my-10 mx-2'>
<Image
src="/images/cate9.png"
width={350}
height={350}
className="object-cover "
/>
<p className='text-sm mt-5 text-brand-secondary lg:px-20 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas neque nisi beatae hic numquam, error dolore quos rem eum minus animi ipsum aliquid aliquam omnis obcaecati molestiae cumque alias nam dolores ex ea. Quaerat exercitationem dolores eos. Temporibus consequatur omnis et inventore sunt repellendus ratione perferendis itaque molestiae pariatur.</p>
        </div>

    </div>
  );
};

export default BhookMitao;
