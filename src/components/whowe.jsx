import { Button } from "@nextui-org/react";
import React from "react";

const WhoWeUs = () => {
  return (
    <div className="flex justify-center mt-10 mb-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-[#e63f38] font-bold">Who we are?</h1>
        <h1 className="max-w-lg text-lg text-center mt-4 pb-4 ">
          we are d Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptate possimus, hic, quia voluptatem reiciendis ratione quam rerum
          pariatur voluptates tempore sapiente. Porro dolorem quidem impedit!
          Quibusdam labore voluptas dolore odio.
        </h1>
        <Button color="primary" variant="shadow" className="w-20 px-24 mt-2">
          More
        </Button>
      </div>
    </div>
  );
};

export default WhoWeUs;
