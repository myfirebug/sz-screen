/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 20:04:50
 * @FilePath: \sz-screen\src\pages\air-environment\components\air-quality-trends\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IAirQualityTrendsProps {}

const AirQualityTrends: FC<IAirQualityTrendsProps> = () => {
  return (
    <Box
      title="全市空气质量趋势"
      className="app-airQualityTrends"
      operation={
        <>
          <Button type="primary">近24小时</Button>
          <Button style={{ marginLeft: 10 }}>近30天</Button>
        </>
      }
    >
      <Echarts
        style={{
          width: "100%",
          height: "100%",
          marginTop: 10,
        }}
        options={{
          color: ["#04FFD0"],
          grid: {
            top: 10,
            right: 20,
            bottom: 50,
          },
          legend: {
            show: false,
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
              name: "Temperature",
              type: "line",
              lineStyle: {
                width: 2,
              },
              data: [2.0, 20.2, 3.3, 4.5, 6.3, 10.2, 10.2],
            },
          ],
        }}
      />
    </Box>
  );
};

export default AirQualityTrends;
