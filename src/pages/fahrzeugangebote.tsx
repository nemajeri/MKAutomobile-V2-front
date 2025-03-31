import { CarsList, MainBar, SideBar } from "@/components";

export const Fahrzeugangebote = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-12">
          <MainBar />
        </div>
        <div className="lg:col-span-3">
          <SideBar />
        </div>
        <div className="lg:col-span-9">
          <CarsList />
        </div>
      </div>
    </div>
  );
};
