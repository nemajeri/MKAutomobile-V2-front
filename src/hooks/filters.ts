import { useState } from "react";

type Filters = {
  marke: string;
  modell: string;
  preis: string;
  kilometerstand: string;
  baujahr: string;
};

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    marke: "",
    modell: "",
    preis: "",
    kilometerstand: "",
    baujahr: "",
  });

  const handleFilterChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return {
    filters,
    handleFilterChange,
  };
};
