import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getAllVans } from "@/lib/actions/vans.action";
const VanCard = async () => {
  const result = await getAllVans();

  return (
    <>
      {result.map((van) => (
        <div key={van.id}>
          <Link href={`/${van._id}`}>
            <Image
              src={van.imageUrl}
              alt="van image"
              width={400}
              height={300}
            />
            <div>
              <h3>{van.name}</h3>
              <p>
                {van.price}
                <span>/day</span>
              </p>
              {/* make beautifull links out of it */}
              <div>
                <i>{van.type}</i>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default VanCard;
