import { FC, ReactNode } from "react";
import "./index.scss";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "primary" | "default";
  shape?: "circle" | "round";
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  type = "default",
  shape,
  ...rest
}) => {
  return (
    <button
      className={`app-button app-button__${type} ${
        shape ? "app-button__" + shape : ""
      } ${className ? "className" : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
