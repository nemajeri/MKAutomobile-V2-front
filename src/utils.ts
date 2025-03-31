import { appRoutes } from "./constants";
import { twMerge } from "tailwind-merge";
import { matchPath } from "react-router";
import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function getTitleFromPath(pathname: string): string {
  const route = appRoutes.find((r) => matchPath({ path: r.path, end: true }, pathname));
  return route?.title.toUpperCase() ?? "SEITE";
}
