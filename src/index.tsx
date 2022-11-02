/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 22:11:17
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 10:39:01
 * @FilePath: \my-app\src\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
