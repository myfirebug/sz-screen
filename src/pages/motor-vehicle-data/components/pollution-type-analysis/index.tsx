/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 21:45:22
 * @FilePath: \sz-screen\src\pages\motor-vehicle-data\components\pollution-type-analysis\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IPollutionTypeAnalysisProps {}

const PollutionTypeAnalysis: FC<IPollutionTypeAnalysisProps> = () => {
  const [data] = useState([
    { value: 1048, name: "a" },
    { value: 735, name: "b" },
    { value: 580, name: "c" },
    { value: 484, name: "d" },
  ]);
  return (
    <Box title="各污染类型分析" className="app-pollutionTypeAnalysis">
      <Echarts
        options={{
          color: ["#4ABBFF"],
          radar: {
            // shape: 'circle',
            indicator: [
              { name: "Sales", max: 6500 },
              { name: "Administration", max: 16000 },
              { name: "Information Technology", max: 30000 },
              { name: "Customer Support", max: 38000 },
              { name: "Development", max: 52000 },
              { name: "Marketing", max: 25000 },
            ],

            axisName: {
              formatter: "{value}",
              color: "#fff",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(53,102,194,.5)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(53,102,194,.5)",
              },
            },
            splitArea: {
              areaStyle: {
                color: ["rgba(0,0,0,0)"],
              },
            },
          },
          series: [
            {
              name: "Budget vs spending",
              type: "radar",
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000],
                  name: "Allocated Budget",
                  areaStyle: {
                    color: "rgba(55,137,246,.7)",
                  },
                },
              ],
            },
          ],
        }}
      />
    </Box>
  );
};

export default PollutionTypeAnalysis;
