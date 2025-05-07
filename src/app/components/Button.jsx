import React from "react";
import Link from "next/link";
const Button = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <Link href="/login">
        <button className="lg:w-[50vw] w-[60vw] bg-brand-primary rounded-md py-1.5 mt-4 text-lg text-brand-secondary font-bold font-login uppercase">
          Reorder
        </button>
      </Link>
    </div>
  );
};

export default Button;
