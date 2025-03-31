import Slider from "rc-slider";
import Select from "react-select";
import "rc-slider/assets/index.css";

const sortOptions = [
  { value: "name", label: "Sortieren nach Name" },
  { value: "price", label: "Sortieren nach Preis" },
  { value: "releaseDate", label: "Sortieren nach Jahr" },
];

export const MainBar = () => {
  return (
    <div className="border border-white p-5">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <Slider className="!w-1/3" />
        <Select options={sortOptions} />
      </div>
    </div>
  );
};
