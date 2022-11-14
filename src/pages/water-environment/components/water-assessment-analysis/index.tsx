/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 20:54:31
 * @FilePath: \sz-screen\src\pages\water-environment\components\water-assessment-analysis\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IWaterAssessmentAnalysisProps {}

const WaterAssessmentAnalysis: FC<IWaterAssessmentAnalysisProps> = () => {
  return (
    <Box title="地表水考核分析" className="app-waterAssessmentAnalysis">
      <ul className="optimal">
        <li className="one"></li>
        <li className="two">
          <div className="value">83.3%</div>
          <div className="name">优III目标值</div>
        </li>
        <li className="three">
          <div className="value">83.3%</div>
          <div className="name">优III当前累计值</div>
        </li>
        <li className="four">
          <div className="value">83.3%</div>
          <div className="name">同比</div>
        </li>
      </ul>
      <ul className="bad">
        <li className="one"></li>
        <li className="two">
          <div className="value">83.3%</div>
          <div className="name">劣V目标值</div>
        </li>
        <li className="three">
          <div className="value">83.3%</div>
          <div className="name">劣V当前累计值</div>
        </li>
        <li className="four">
          <div className="value">1.3%</div>
          <div className="name">同比</div>
        </li>
      </ul>
      <Echarts
        style={{
          width: "100%",
          height: 180,
          marginTop: 15,
        }}
        options={{
          color: ["#CFF3FF", "#04FFD0"],
          grid: {
            top: 30,
            right: 20,
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
          yAxis: {
            type: "value",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              color: "#fff",
              formatter: "{value}%",
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
          series: [
            {
              name: "Temperature",
              type: "line",
              lineStyle: {
                width: 2,
              },
              data: [2.0, 20.2, 3.3, 4.5, 6.3, 10.2, 10.2],
            },
            {
              name: "Precipitation",
              type: "line",
              barWidth: 20,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 80.7],
            },
          ],
        }}
      />
    </Box>
  );
};

export default WaterAssessmentAnalysis;
