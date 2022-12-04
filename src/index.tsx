/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-05 20:03:26
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-03 14:22:54
 * @FilePath: \sz-screen\src\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "antd/dist/antd.min.css";
// import "@src/mock";

(window as any).centerLng = 112.432906;
(window as any).centerLat = 39.331734;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
