import { Car } from "@/api/cars";
import { Calendar, Gauge, Settings } from "lucide-react";

type CarCardProps = Pick<Car, "make" | "title" | "year" | "transmission" | "mileage" | "price" | "images"> & {
  variant: "horizontal" | "vertical";
};

export const CarCard = ({ images, title, price, year, transmission, mileage }: CarCardProps) => {
  return (
    <div className="border border-white/30 p-4 space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <img src={images[0]} alt={title} className="w-full lg:w-64 h-auto object-cover" />

        <div className="flex flex-col justify-between flex-1 space-y-4">
          <div>
            <h2 className="text-white font-medium text-lg">{title}</h2>
            <p className="text-red-500 text-xl mt-1">{price}</p>
            <div className="w-12 border-t border-red-500 mt-1" />
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-4">
            <InfoItem icon={<Calendar className="w-4 h-4" />} label={year.toString()} />
            <InfoItem icon={<Settings className="w-4 h-4" />} label={transmission} />
            <InfoItem icon={<Gauge className="w-4 h-4" />} label={mileage.toString()} />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-1 border px-2 py-1 text-sm text-white">
    {icon}
    <span>{label}</span>
  </div>
);
