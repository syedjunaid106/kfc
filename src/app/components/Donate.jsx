import React from "react";
import Image from "next/image";
const Donate = () => {
  return (
    <div className="flex items-center flex-col justify-center w-[90vw] mx-auto my-20">
      <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-10">
        <div className="bg-brand-darkGray lg:h-[260px] lg:w-[670px] h-[200px] w-[320px] rounded-md p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/citizen.png"
            width={250}
            height={250}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe cum in voluptas, libero temporibus illo quis itaque. Ut, quia!
          </p>
        </div>
        <div className="bg-brand-darkGray mt-5 lg:mt-0 lg:h-[260px] lg:w-[670px] h-[200px] w-[320px] rounded-md p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/deaf.jpeg"
            width={250}
            height={250}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ut nesciunt fuga ad reiciendis dolorum itaque distinctio eos explicabo soluta.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-row flex-col lg:space-x-10 lg:mt-10 mt-5">
        <div className="bg-brand-darkGray lg:h-[260px] lg:w-[670px] h-[200px] w-[320px] rounded-md p-6 flex flex-col items-center justify-center">
          <Image
            src="/images/orange.png"
            width={150}
            height={150}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nobis corporis tempore provident iure error, quod repellat. Quam, voluptatum nam.
          </p>
        </div>
        <div className="bg-brand-darkGray h-[200px] w-[320px] lg:h-[260px] lg:w-[670px] rounded-md p-6 flex flex-col items-center justify-center mt-5 lg:mt-0">
          <Image
            src="/images/cyte.png"
            width={150}
            height={150}
            alt="citizen"
            className="object-cover"
          />
          <p className="text-sm mt-10 text-brand-secondary text-center">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ea optio beatae facilis voluptas? Laboriosam reiciendis amet deserunt quia laborum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
