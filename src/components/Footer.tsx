import { ReactNode } from "react";
import ContactInfo from "@components/ContactInfo";

type FooterProps = {
  children: ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <>
      <ContactInfo />
      <div className="text-gray-500 bg-black w-full border-b border-white/20 sticky py-5 bottom-0 text-sm">
        {children}
      </div>
    </>
  );
};

type FooterItemProps = {
  children: ReactNode;
};

const Item = ({ children }: FooterItemProps) => {
  return (
    <span className="flex items-center gap-2 py-3 uppercase cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out">
      {children}
    </span>
  );
};

Footer.Item = Item;
