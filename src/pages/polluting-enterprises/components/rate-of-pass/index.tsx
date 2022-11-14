/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-12 18:46:30
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 18:50:37
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\components\rate-of-pass\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IRateOfPassProps {}

const RateOfPass: FC<IRateOfPassProps> = () => {
  return (
    <Box title="企业污染合格率月度趋势分析" className="app-rateOfPass">
      <Echarts
        style={{
          width: "100%",
          height: 249,
        }}
        options={{
          color: ["#04FFD0"],
          grid: {
            top: 30,
            bottom: 50,
            right: 20,
          },
          legend: {
            data: ["Precipitation"],
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
          series: [
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

export default RateOfPass;
