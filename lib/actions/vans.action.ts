"use server";

import { connectToDatabase } from "../database/mongoose";
import { Van } from "../database/van.model";

export async function getAllVans() {
  try {
    await connectToDatabase();
    const allVans = await Van.find({});

    return allVans;
  } catch (error) {
    console.log(error);
    throw new Error("fetching all vans faild");
  }
}

export async function findVan(id: string) {
  try {
    await connectToDatabase();

    const van = await Van.findById(id);
    return van;
  } catch (error) {
    console.log(error);
    throw new Error(`fetch van faild`);
  }
}
