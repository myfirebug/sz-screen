/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 22:07:56
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\components\pollution-source-enterprise-number\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Echarts from "@src/components/echarts";
import "./index.scss";

interface IPollutionSourceEnterpriseNumberProps {}

const PollutionSourceEnterpriseNumber: FC<
  IPollutionSourceEnterpriseNumberProps
> = () => {
  return (
    <Box
      title="各污染源企业数量"
      className="app-pollutionSourceEnterpriseNumber"
    >
      <Echarts options={{}} />
    </Box>
  );
};

export default PollutionSourceEnterpriseNumber;
