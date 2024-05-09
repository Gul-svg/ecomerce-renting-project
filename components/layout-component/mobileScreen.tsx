import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ProductList from "../ui/shared/ProductList";
import Carousel from "../ui/emblacarousel/Carousel";

const mobileScreen = () => {
  return (
    // <section className="grid md:grid-cols-[2fr_1fr] w-full mx-auto">
    //   <div className="items-center flex justify-center">
    //     {/* TODO: WORK ON THE FONT-FACE HER */}
    //     <h1 className=" text-4xl font-bold tracking-tighter text-primary-foreground sm:text-6xl absolute mt-2 left-2.5 ">
    //       Unlock the <br />
    //       freedom of the <br />
    //       open road
    //     </h1>
    //     <div className="relative -top-12 -z-9 ">
    //       <Image
    //         src="/pic.jpeg"
    //         alt="pic"
    //         width={400}
    //         height={300}
    //         className="object-cover mix-blend-multiply flex-grow flex-1 bg-primary opacity-40 "
    //       />
    //     </div>
    //     <Button className="absolute bottom-0  px-8 rounded-full text-accent-foreground bg-accent border mb-1">
    //       Talk with AI assistant
    //     </Button>
    //     <div className="bg-background absolute inset-0 -z-10"></div>
    //   </div>
    //   {/* TODO: MAKE PRODUCT LIST ACCORDION */}
    //   <ProductList />
    // </section>
    <section className="">
      <div className="items-center flex  flex-col h-fit ">
        {/* TODO: WORK ON THE FONT-FACE HERE */}

        <div>
          <div className="relative -top-12 -z-9 ">
            <Image
              src="/pic.jpeg"
              alt="pic"
              width={400}
              height={300}
              className="object-cover mix-blend-multiply flex-grow flex-1 bg-primary opacity-40 relative"
            />
            <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-6xl absolute  bottom-10 ml-2">
              Unlock the <br />
              freedom of the <br />
              open road
            </h1>
          </div>
        </div>
      </div>
      {/* TODO: MAKE PRODUCT LIST ACCORDION */}
      <div className="flex flex-col -mt-10">
        <Carousel />
        <Button className="px-8 rounded-full text-accent-foreground bg-accent border mb-1">
          Talk with AI assistant
        </Button>
      </div>
    </section>
  );
};

export default mobileScreen;
