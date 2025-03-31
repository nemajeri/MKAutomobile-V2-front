import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

type HeaderItemProps = {
  icon?: React.ReactElement<SVGElement>;
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <div className="text-white w-full border-b border-white/20 text-sm">{children}</div>;
};

const Item = ({ icon, children }: HeaderItemProps) => {
  return (
    <span className="flex items-center gap-2 py-3 cursor-pointer hover:text-red-500 transition-all duration-200 ease-in-out">
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};

Header.Item = Item;
