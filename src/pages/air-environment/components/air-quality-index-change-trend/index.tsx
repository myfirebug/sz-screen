/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 16:24:00
 * @FilePath: \sz-screen\src\pages\air-environment\components\air-quality-index-change-trend\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IAirQualityIndexChangeTrendProps {}

const AirQualityIndexChangeTrend: FC<IAirQualityIndexChangeTrendProps> = () => {
  return (
    <Box
      title="空气质量指数变化趋势"
      operation={
        <>
          <Button type="primary">年度</Button>
          <Button style={{ marginLeft: 10 }}>月度</Button>
        </>
      }
      className="app-airQualityIndexChangeTrend"
    >
      <Echarts
        options={{
          color: ["#FFB737", "#4A8CFF"],
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
              max: 250,
              interval: 50,
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
              max: 25,
              interval: 5,
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
              barWidth: 20,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 80.7],
            },
          ],
        }}
      />
    </Box>
  );
};

export default AirQualityIndexChangeTrend;
