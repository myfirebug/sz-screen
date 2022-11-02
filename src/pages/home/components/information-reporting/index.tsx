/*
 * @Description: 信息上报
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 10:00:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 10:01:36
 * @FilePath: \my-app\src\pages\home\components\event-details\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";

interface IInformationReportingProps {}

const InformationReporting: FC<IInformationReportingProps> = () => {
  return (
    <Box
      title="信息上报"
      style={{
        marginTop: 16,
        height: 384,
      }}
    />
  );
};

export default InformationReporting;
