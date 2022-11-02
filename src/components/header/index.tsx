/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 23:08:40
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-31 17:54:34
 * @FilePath: \my-app\src\components\header\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import "./index.scss";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <div className="app-header">
      <div className="left">
        <div className="time">17:43</div>
        <div className="date">2022-10-23 周日 山西 朔州</div>
      </div>
      <h1 className="logo">朔州市生态环境应急事件指挥调度中心</h1>
      <div className="right">
        <span className="temp">19°</span>
        <span className="other">晴 湿度39%</span>
      </div>
    </div>
  );
};

export default Header;
