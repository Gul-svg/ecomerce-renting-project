import MobileScreen from "@/components/layout-component/mobileScreen";

import VanCard from "@/components/VanCard";

const Home = async () => {
  return (
    <>
      <MobileScreen />
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <VanCard />
      </div>
    </>
  );
};

export default Home;
