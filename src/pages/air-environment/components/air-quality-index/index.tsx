/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 15:27:25
 * @FilePath: \sz-screen\src\pages\air-environment\components\air-quality-index\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import "./index.scss";

interface IAirQualityIndexProps {}

const AirQualityIndex: FC<IAirQualityIndexProps> = () => {
  return (
    <Box title="空气质量指数" className="app-airQualityIndex">
      <div className="body">
        <div className="echarts"></div>
        <div className="info">
          <p>
            <span className="name">AQI考核目标值</span>
            <span className="value">38</span>
          </p>
          <p>
            <span className="name">AQI累计均值</span>
            <span className="value">38</span>
          </p>
          <p>
            <span className="name">剩余可超标天数</span>
            <span className="value">38</span>
          </p>
        </div>
      </div>
      <ul className="list">
        <li className="item">
          <div className="value">9</div>
          <div className="progress">
            <div className="bar" style={{ width: "10%" }}></div>
          </div>
          <div className="name">PM2.5</div>
        </li>
        <li className="item">
          <div className="value">9</div>
          <div className="progress">
            <div className="bar" style={{ width: "10%" }}></div>
          </div>
          <div className="name">PM2.5</div>
        </li>
        <li className="item">
          <div className="value">9</div>
          <div className="progress">
            <div className="bar" style={{ width: "10%" }}></div>
          </div>
          <div className="name">PM2.5</div>
        </li>
        <li className="item">
          <div className="value">9</div>
          <div className="progress">
            <div className="bar" style={{ width: "10%" }}></div>
          </div>
          <div className="name">PM2.5</div>
        </li>
        <li className="item">
          <div className="value">9</div>
          <div className="progress">
            <div className="bar" style={{ width: "10%" }}></div>
          </div>
          <div className="name">PM2.5</div>
        </li>
        <li className="item">
          <div className="value">9</div>
          <div className="progress">
            <div className="bar" style={{ width: "10%" }}></div>
          </div>
          <div className="name">PM2.5</div>
        </li>
      </ul>
    </Box>
  );
};

export default AirQualityIndex;
