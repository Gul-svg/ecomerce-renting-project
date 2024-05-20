import { findVan } from "@/lib/actions/vans.action";
import React from "react";

interface inputParams {
  params: { id: string };
}
// { params: { id: '2' }, searchParams: {} }
const page = async ({ params: { id: vanId } }: inputParams) => {
  const result = await findVan(vanId);

  return <div>{result?.name}</div>;
};

export default page;
