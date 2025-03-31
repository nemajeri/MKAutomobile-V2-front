import { cn } from "@/utils";
import autoAnimate from "@formkit/auto-animate";
import { ReactNode, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { MenuIcon, X } from "lucide-react";

type NavProps = {
  children: ReactNode;
};

type NavItemProps = {
  to: string;
  children: ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    nav.current && autoAnimate(nav.current);
  }, [nav]);

  return (
    <nav className="w-full">
      <div className="flex justify-end p-4 lg:hidden">
        <MenuIcon onClick={() => setOpen((prev) => !prev)} className="text-white size-7 cursor-pointer" />
      </div>

      {open && (
        <div
          ref={nav}
          className={cn(
            "flex flex-col gap-4 bg-black text-white py-4 fixed right-0 top-0 bottom-0 max-sm:left-0 lg:hidden transform transition-transform duration-300 ease-in-out",
            { "translate-x-0": open, "translate-x-full": !open }
          )}
        >
          <div className="flex justify-end p-4">
            <X onClick={() => setOpen((prev) => !prev)} className="text-white size-7 cursor-pointer" />
          </div>
          {children}
        </div>
      )}

      <div className="hidden lg:flex mx-auto items-center justify-center w-full h-36 text-sm gap-6">{children}</div>
    </nav>
  );
};

const Item = ({ to, children }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return cn("text-white hover:text-red-500 uppercase transition-all duration-200 ease-in-out max-lg:px-12", {
          "text-red-500": isActive,
        });
      }}
    >
      <span className="text-left break-words">{children}</span>
    </NavLink>
  );
};

Nav.Item = Item;
Nav.displayName = "Nav";
