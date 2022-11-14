/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 18:06:50
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\components\enterprise-type-accounted\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useCallback, useMemo, useState } from "react";
import Box from "@src/components/box";
import { Progress } from "antd";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IEnterpriseTypeAccountedProps {}

const EnterpriseTypeAccounted: FC<IEnterpriseTypeAccountedProps> = () => {
  const [list, setList] = useState([
    {
      value: 30,
      name: "国有企业",
      color: "#37FFD7",
    },
    {
      value: 15,
      name: "合资企业",
      color: "#FFB738",
    },
    {
      value: 55,
      name: "私有企业",
      color: "#4A8CFF",
    },
  ]);
  const setOptions = useCallback((value: number, color: string) => {
    return {
      animation: true,
      series: [
        {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          center: ["50%", "50%"], // 中心点
          radius: "100%", // 圆大小
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false, // 多组数据时进度条是否重叠
            roundCap: true, // 是否在两端显示成圆形
            clip: false, // 是否裁掉超出部分
            itemStyle: {
              borderWidth: 0,
              shadowColor: "",
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: color, // 0% 处的颜色  '#02C77E'
                  },
                  {
                    offset: 1,
                    color: color, // 100% 处的颜色  '#017770'
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          axisLine: {
            lineStyle: {
              width: 6, // 圆环宽度
              color: [[1, "#002865"]], // 圆环背景色
            },
          },
          splitLine: {
            // 仪表盘分割线
            show: false,
          },
          axisTick: {
            // 刻度样式
            show: false,
          },
          axisLabel: {
            // 刻度标签
            show: false,
          },
          data: [
            {
              value: value,
              title: {},
              detail: {
                // 中心title设置
                offsetCenter: ["0%", "0%"],
                color: "#4ABBFF",
                fontSize: 24,
                formatter: "{value}%",
                // borderColor: '#01F8FF',
                // borderRadius: 20,
                // borderWidth: 1,
              },
            },
          ],
          title: {
            fontSize: 14,
          },
          detail: {
            // width: 50,
            // height: 14,
            fontSize: 14,
            color: "auto",
          },
        },
      ],
    };
  }, []);
  return (
    <Box title="严重污染企业类型占比" className="app-enterpriseTypeAccounted">
      <ul className="list">
        {list.map((item, index) => (
          <li className="item" key={index}>
            <Echarts
              style={{
                width: 80,
                height: 80,
                margin: "0 auto",
              }}
              options={setOptions(item.value, item.color)}
            />
            <div className="title">{item.name}</div>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default EnterpriseTypeAccounted;
