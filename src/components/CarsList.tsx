import { useCars } from "@/api/cars";
import { CarCard } from "./CarCard";

export const CarsList = () => {
  const { cars } = useCars();
  return (
    <div>
      {cars?.data.map(({ id, title, mileage, transmission, images, price, year, make }) => (
        <CarCard
          variant="vertical"
          key={id}
          title={title}
          mileage={mileage}
          transmission={transmission}
          images={images}
          price={price}
          year={year}
          make={make}
        />
      ))}
    </div>
  );
};
