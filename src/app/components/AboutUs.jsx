import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full lg:w-[90vw] mx-auto">
      <h2 className="text-3xl text-brand-secondary font-bold font-login lg:mt-28 mt-32">
        ABOUT US
      </h2>

      <div className="flex lg:flex-row flex-col mx-auto bg-brand-darkGray mt-10 lg:p-5 p-2 rounded-md items-center justify-between">
        <p className="text-sm text-brand-secondary text-center lg:text-left lg:mx-5 w-full lg:w-[50%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit neque, veritatis mollitia tempore nam exercitationem minus dolor dolorum est magnam reiciendis alias doloribus sunt. Fugit a doloremque odit commodi ipsam eveniet facilis temporibus nobis mollitia reprehenderit porro asperiores, cupiditate molestias deserunt, autem ratione corporis provident veniam tempore quae. Delectus labore vel, sit a facere adipisci? Architecto cupiditate corporis, consequatur tempore accusamus, saepe nulla delectus animi modi libero dolorum odit non fugit minima reprehenderit veniam quasi ipsa aliquid perferendis esse neque ducimus ullam magni! Pariatur impedit tempora quibusdam maxime, eaque eos voluptatem illum, quae odit dolorum iste, sapiente quas voluptatum.
        </p>
        <div className="flex items-center justify-center bg-brand-primary mx-5 rounded-md lg:w-[480px] mt-4 lg:mt-0 w-[300px] h-[170px] lg:h-[197px]">
          <p className="text-md text-brand-secondary text-center p-2 font-bold">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
