import { FC, ReactNode } from "react";
import "./index.scss";

interface ISidebarRightProps {
  children: ReactNode;
}

const SidebarRight: FC<ISidebarRightProps> = ({ children }) => {
  return <div className="app-sidebar-right">{children}</div>;
};

export default SidebarRight;
