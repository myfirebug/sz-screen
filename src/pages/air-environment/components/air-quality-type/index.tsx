/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 16:07:28
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 16:32:15
 * @FilePath: \sz-screen\src\pages\air-environment\components\air-quality-type\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IAirQualityTypeProps {}

const AirQualityType: FC<IAirQualityTypeProps> = () => {
  return (
    <Box
      title="趋势分析"
      className="app-airQualityType"
      operation={
        <>
          <Button type="primary">年度</Button>
          <Button style={{ marginLeft: 10 }}>月度</Button>
        </>
      }
    >
      <ul className="tab">
        <li className="tab-item active">O3</li>
        <li className="tab-item">SO2</li>
        <li className="tab-item">NO2</li>
        <li className="tab-item">PM2.5</li>
        <li className="tab-item">PM10</li>
        <li className="tab-item">CO</li>
      </ul>
      <ul className="card">
        <li className="card-item">
          <div className="value">13</div>
          <div className="name">O3考核目标值</div>
        </li>
        <li className="card-item">
          <div className="value">13</div>
          <div className="name">O3累计均值</div>
        </li>
        <li className="card-item">
          <div className="value">13</div>
          <div className="name">O3年底控制线</div>
        </li>
      </ul>
      <Echarts
        style={{
          width: "100%",
          height: 170,
          marginTop: 10,
        }}
        options={{
          color: ["#CFF3FF", "#04FFD0"],
          grid: {
            top: 30,
            bottom: 30,
          },
          legend: {
            data: ["Precipitation", "Temperature"],
          },
          xAxis: [
            {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisLabel: {
                color: "#fff",
              },
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              min: 0,
              max: 60,
              interval: 20,
              axisLabel: {
                color: "#fff",
                formatter: "{value}",
              },
              axisLine: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "rgba(255,255,255,0.24)",
                },
              },
            },
            {
              type: "value",
              min: 0,
              max: 60,
              interval: 20,
              axisLabel: {
                color: "#fff",
                formatter: "{value}%",
              },
              axisLine: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: "Temperature",
              type: "line",
              yAxisIndex: 1,
              lineStyle: {
                width: 2,
              },
              data: [2.0, 20.2, 3.3, 4.5, 6.3, 10.2, 10.2],
            },
            {
              name: "Precipitation",
              type: "bar",
              barWidth: 8,
              itemStyle: {
                borderRadius: 8,
              },
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 80.7],
            },
          ],
        }}
      />
    </Box>
  );
};

export default AirQualityType;
