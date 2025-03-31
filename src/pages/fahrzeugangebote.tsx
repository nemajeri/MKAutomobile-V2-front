import { CarsList, MainBar, SideBar } from "@/components";

export const Fahrzeugangebote = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="grid lg:grid-cols-12 lg:gap-4">
        <div className="lg:col-span-12">
          <MainBar />
        </div>
        <div className="lg:col-span-4">
          <SideBar />
        </div>
        <div className="lg:col-span-4">
          <CarsList />
        </div>
      </div>
    </div>
  );
};
