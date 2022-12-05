import { FC, ReactNode } from "react";
import { Tooltip } from "antd";
import "./index.scss";

interface IDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hideHander: () => void;
  children: ReactNode;
}

const Dialog: FC<IDialogProps> = ({
  title,
  hideHander,
  children,
  className,
  ...rest
}) => {
  return (
    <>
      <div className={`app-dialog ${className ? className : ""}`} {...rest}>
        <div className="app-dialog__header">
          <div className="title">{title}</div>
          <Tooltip title="关闭" color="#4a8cff">
            <div className="close" onClick={hideHander}></div>
          </Tooltip>
        </div>
        <div className="app-dialog__body">{children}</div>
      </div>
      <div className="app-dialog__mask" onClick={hideHander}></div>
    </>
  );
};

export default Dialog;
