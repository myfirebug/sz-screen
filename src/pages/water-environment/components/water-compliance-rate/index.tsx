/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-09 20:06:28
 * @FilePath: \sz-screen\src\pages\water-environment\components\water-compliance-rate\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useState } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IWaterComplianceRateProps {}

const WaterComplianceRate: FC<IWaterComplianceRateProps> = () => {
  const [data] = useState([
    { value: 1048, name: "a" },
    { value: 735, name: "b" },
    { value: 580, name: "c" },
    { value: 484, name: "d" },
  ]);
  return (
    <Box title="当月饮用水达标率" className="app-waterComplianceRate">
      <div className="echart"></div>
      <ul className="list">
        <li className="item">
          <div className="value">1000</div>
          <div className="name">采样数量</div>
        </li>
        <li className="item">
          <div className="value">1000</div>
          <div className="name">合格数量</div>
        </li>
      </ul>
    </Box>
  );
};

export default WaterComplianceRate;
