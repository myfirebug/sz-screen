/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 21:32:43
 * @FilePath: \sz-screen\src\pages\water-environment\components\water-level\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IWaterLevelProps {}

const WaterLevel: FC<IWaterLevelProps> = () => {
  const [data] = useState([
    { value: 1048, name: "a" },
    { value: 735, name: "b" },
    { value: 580, name: "c" },
    { value: 484, name: "d" },
  ]);
  return (
    <Box title="当月地表水水质等级占比" className="app-waterLevel">
      <Echarts
        options={{
          color: ["#4ABBFF", "#4A8CFF", "#37FFD7", "#FFB738"],
          tooltip: {
            trigger: "item",
          },
          grid: {
            top: 30,
            bottom: 30,
          },
          legend: {
            // 对图形的解释部分
            orient: "vertical",
            right: 10,
            y: "center",
            icon: "circle", // 添加
            formatter: function (name: string) {
              // 添加
              let total = 0;
              let target = 0;
              for (let i = 0; i < data.length; i++) {
                total += data[i].value;
                if (data[i].name === name) {
                  target = data[i].value;
                }
              }
              var arr = [
                "{a|" + name + "}",
                "{b|" + ((target / total) * 100).toFixed(2) + "%}",
              ];
              return arr.join("  ");
            },
            textStyle: {
              // 添加
              padding: [8, 0, 0, 0],
              rich: {
                a: {
                  fontSize: 14,
                  width: 80,
                  color: "#fff",
                },
                b: {
                  fontSize: 14,
                  width: 70,
                  color: "#fff",
                },
              },
            },
          },
          series: [
            {
              name: "Temperature",
              type: "pie",
              radius: ["40%", "70%"],
              center: ["30%", "50%"],
              label: {
                show: false,
                position: "center",
              },
              data: data,
            },
          ],
        }}
      />
    </Box>
  );
};

export default WaterLevel;
