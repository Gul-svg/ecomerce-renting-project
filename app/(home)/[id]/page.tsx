import { findVan } from "@/lib/actions/vans.action";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
/**
 * this should be a generic component which can handle any type of vehicle and render a datail page
 * for the properties received for the vehicle
 */
interface inputParams {
  params: { id: string };
}
// { params: { id: '2' }, searchParams: {} }
const page = async ({ params: { id: vanId } }: inputParams) => {
  const result = await findVan(vanId);

  return (
    <div className=" mx-7 mt-20 flex  flex-col ">
      <Image
        src={result.imageUrl}
        alt="vehicle image"
        width={350}
        height={350}
      />
      <Button className="mt-12 w-[85px]  bg-orange-500 md:self-start">
        {result.type}
      </Button>
      <h2 className="mt-5">{result.name}</h2>
      <p className="mt-2.5">
        <strong className="font-bold">${result.price}</strong>/day
      </p>
      <p className="mt-2.5">{result.description}</p>
      <Button className="mt-5 self-stretch">Rent this van</Button>
    </div>
  );
};

export default page;
