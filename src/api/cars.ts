import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  month: number;
  body: string;
  mileage: number;
  fuel: string;
  transmission: string;
  condition: string;
  drivetrain: string;
  engine: string;
  exterior: string;
  price: number;
  link: string;
  title: string;
  images: string[];
  features: string[];
  description: string;
};

export const useCars = () => {
  const getCars = async () => {
    const response = await axios.get<Car[]>(`${import.meta.env.API_BASE}/cars`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response;
  };

  const {
    data: cars,
    isPending: isLoadingCars,
    error: carsError,
  } = useQuery({ queryKey: ["cars"], queryFn: getCars, staleTime: 1000 * 60 * 5 });

  const maxCarPrice = cars?.data?.reduce((acc: number, car: Car) => {
    if (car.price > acc) {
      return car.price;
    }
    return acc;
  }, 0);

  const minCarPrice = cars?.data?.reduce((acc: number, car: Car) => {
    if (car.price < acc) {
      return car.price;
    }
    return acc;
  }, 0);

  return {
    cars,
    isLoadingCars,
    carsError,
    minCarPrice,
    maxCarPrice,
  };
};
