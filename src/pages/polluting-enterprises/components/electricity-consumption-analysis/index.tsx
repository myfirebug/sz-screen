/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 18:35:23
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\components\electricity-consumption-analysis\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IElectricityConsumptionAnalysisProps {}

const ElectricityConsumptionAnalysis: FC<
  IElectricityConsumptionAnalysisProps
> = () => {
  return (
    <Box title="企业用电量分析" className="app-electricityConsumptionAnalysis">
      <ul className="list">
        <li className="item">
          <div className="value">8,102,381</div>
          <div className="name">年度累计用电量</div>
        </li>
        <li className="item">
          <div className="value">902,381</div>
          <div className="name">当月用电量</div>
        </li>
      </ul>
      <div className="sub-title">企业用电月度趋势排行</div>
      <Echarts
        style={{
          width: "100%",
          height: 200,
          marginTop: 10,
        }}
        options={{
          color: ["#04FFD0", "#CFF3FF"],
          grid: {
            top: 30,
            right: 20,
            bottom: 20,
          },
          legend: {
            show: true,
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
            max: 40,
            interval: 10,
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
          series: [
            {
              name: "a",
              type: "line",
              lineStyle: {
                width: 2,
              },
              data: [2.0, 20.2, 3.3, 4.5, 6.3, 10.2, 10.2],
            },
            {
              name: "b",
              type: "line",
              lineStyle: {
                width: 2,
              },
              data: [4.0, 30.2, 6.3, 10.5, 8.3, 12.2, 15.2],
            },
          ],
        }}
      />
      <div className="sub-title">企业用电量Top5</div>
      <ul className="top5">
        <li className="top5-item">
          <div className="sort">1</div>
          <div className="name">朔州市工业自动化股份有限公司</div>
          <div className="value">
            <b>902,381</b>KW
          </div>
        </li>
        <li className="top5-item">
          <div className="sort">1</div>
          <div className="name">朔州市工业自动化股份有限公司</div>
          <div className="value">
            <b>902,381</b>KW
          </div>
        </li>
        <li className="top5-item">
          <div className="sort">1</div>
          <div className="name">朔州市工业自动化股份有限公司</div>
          <div className="value">
            <b>902,381</b>KW
          </div>
        </li>
        <li className="top5-item">
          <div className="sort">1</div>
          <div className="name">朔州市工业自动化股份有限公司</div>
          <div className="value">
            <b>902,381</b>KW
          </div>
        </li>
        <li className="top5-item">
          <div className="sort">1</div>
          <div className="name">朔州市工业自动化股份有限公司</div>
          <div className="value">
            <b>902,381</b>KW
          </div>
        </li>
      </ul>
    </Box>
  );
};

export default ElectricityConsumptionAnalysis;
