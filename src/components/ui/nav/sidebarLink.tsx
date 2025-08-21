import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import clsx from "clsx";

interface SidebarLinkProps {
  to: string;
  icon?: ReactNode;
  children: ReactNode;
  end?: boolean;
}

export const SidebarLink = ({ to, icon, children, end }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx("flex items-center gap-2 px-2 py-1 rounded", {
          "bg-base-content text-base-100": isActive,
          "hover:bg-base-200": !isActive,
        })
      }
      end={end}
    >
      {icon}
      {children}
    </NavLink>
  );
};
