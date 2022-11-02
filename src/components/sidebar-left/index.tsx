import { FC, ReactNode } from "react";
import "./index.scss";

interface ISidebarLeftProps {
  children: ReactNode;
}

const SidebarLeft: FC<ISidebarLeftProps> = ({ children }) => {
  return <div className="app-sidebar-left">{children}</div>;
};

export default SidebarLeft;
