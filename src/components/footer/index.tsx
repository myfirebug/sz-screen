/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-31 21:28:27
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 22:29:22
 * @FilePath: \my-app\src\components\footer\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import "./index.scss";

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <ul className="app-footer">
      <li>
        <span className="icon icon-0"></span>空气环境质量
      </li>
      <li>
        <span className="icon icon-1"></span>水环境质量
      </li>
      <li className="active">
        <span className="icon icon-2"></span>应急指挥调度
      </li>
      <li>
        <span className="icon icon-3"></span>机动车数据
      </li>
      <li>
        <span className="icon icon-4"></span>重点污染企业
      </li>
    </ul>
  );
};

export default Footer;
