/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-15 22:17:39
 * @FilePath: \sz-screen\src\pages\default\components\motor-vehicle-data\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import Echarts from "@src/components/echarts";
import * as echarts from "echarts";
import "./index.scss";

interface IMotorVehicleDataProps {}

const MotorVehicleData: FC<IMotorVehicleDataProps> = () => {
  const [list, setList] = useState([
    {
      name: "机动车总数",
      value: "435,642",
    },
    {
      name: "本市籍车总数",
      value: "435,642",
    },
    {
      name: "外市籍车总数",
      value: "435,642",
    },
  ]);
  return (
    <Box title="机动车数据" className="app-motorVehicleData">
      <ul className="list">
        {list.map((item, index) => (
          <li className="item" key={index}>
            <div className="value">{item.value}</div>
            <img
              src={require(`../../../../assets/images/motor-icon${++index}.png`)}
              alt=""
              width="86"
              height="68"
            />
            <div className="name">{item.name}</div>
          </li>
        ))}
      </ul>
      <div className="sub-title">污染车辆月趋势分析</div>
      <Echarts
        style={{
          width: "100%",
          height: 220,
          marginTop: 10,
        }}
        options={{
          color: ["#68FFED"],
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
              areaStyle: {
                opacity: 0.5,
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 1,
                      color: "#68FFED",
                    },
                    {
                      offset: 0,
                      color: "rgba(55,255,255,.21)",
                    },
                  ]),
                },
              },
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

export default MotorVehicleData;
