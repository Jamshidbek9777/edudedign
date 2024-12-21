import { Button } from "@nextui-org/react";
import React from "react";

const WhoWeUs = () => {
  return (
    <div className="flex justify-center mt-20 mb-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-[#e63f38] font-bold">“Innovative and effective educational areas for future generations”</h1>
        <h1 className="max-w-7xl text-lg text-center mt-4 pb-4 ">
          When designing a school and responding to its needs, we are aware that our main job is to create physical spaces that are in line with the educational philosophy of the school.
        </h1>
        {/*<Button color="primary" variant="shadow" className="w-20 px-24 mt-2">*/}
        {/*  More*/}
        {/*</Button>*/}
      </div>
    </div>
  );
};

export default WhoWeUs;
