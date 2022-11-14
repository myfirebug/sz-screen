/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-31 22:02:50
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 16:10:31
 * @FilePath: \sz-screen\src\components\box\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, ReactNode } from "react";
import "./index.scss";

interface IboxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: ReactNode;
  operation?: ReactNode;
}

const Box: FC<IboxProps> = ({
  title,
  className,
  children,
  operation,
  ...rest
}) => {
  return (
    <div className={`app-box ${className}`} {...rest}>
      {title ? (
        <div className="app-box__header">
          <h2 className="title">{title}</h2>
          <div className="operation">{operation}</div>
        </div>
      ) : null}
      <div className="app-box__body">{children}</div>
    </div>
  );
};

export default Box;
