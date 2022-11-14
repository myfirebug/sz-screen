/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-12 19:53:36
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 21:08:40
 * @FilePath: \sz-screen\src\pages\motor-vehicle-data\components\motor-vehicle\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState } from "react";
import Echarts from "@src/components/echarts";
import Box from "@src/components/box";
import "./index.scss";

interface IMotorVehicleProps {}

const MotorVehicle: FC<IMotorVehicleProps> = () => {
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
  const [data] = useState([
    { value: 1048, name: "a" },
    { value: 735, name: "b" },
    { value: 580, name: "c" },
    { value: 484, name: "d" },
  ]);
  return (
    <Box title="机动车数据" className="app-motorVehicle">
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
      <div className="sub-title">机动车类型占比</div>
      <Echarts
        style={{
          width: "100%",
          height: 180,
        }}
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
            right: 20,
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
              center: ["30%", "50%"],
              label: {
                show: true,
                position: "inner",
                formatter: "{d}%",
                color: "#fff",
                textShadowColor: "#000",
                textShadowBlur: 3,
              },
              data: data,
            },
          ],
        }}
      />
    </Box>
  );
};

export default MotorVehicle;
