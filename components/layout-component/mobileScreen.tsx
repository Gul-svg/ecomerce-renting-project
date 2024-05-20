import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Carousel from "../ui/emblacarousel/Carousel";

// todo normalize the css first hand
const mobileScreen = () => {
  return (
    <section className="">
      <div className="flex flex-col  items-center ">
        {/* TODO: WORK ON THE FONT-FACE HERE */}

        <div>
          <div className="-z-9 relative -top-12 ">
            <Image
              src="/pic.jpeg"
              alt="pic"
              width={5000}
              height={5000}
              className="relative h-fit w-full  grow bg-primary object-cover opacity-40 mix-blend-multiply"
            />
            <h1 className="absolute bottom-10 ml-2 text-4xl font-bold tracking-tighter  text-primary-foreground sm:text-6xl">
              Unlock the <br />
              freedom of the <br />
              open road
            </h1>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-5 self-center">
          <Carousel />
          <Button className="mb-1 cursor-pointer self-center rounded-full px-20 py-5 text-xl font-bold hover:rounded-xl hover:invert-[.1]">
            Talk with AI assistant
          </Button>
        </div>
      </div>
      {/* TODO: MAKE PRODUCT LIST ACCORDION */}
    </section>
  );
};

export default mobileScreen;
