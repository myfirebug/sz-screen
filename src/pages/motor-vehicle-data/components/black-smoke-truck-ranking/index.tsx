/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 21:51:55
 * @FilePath: \sz-screen\src\pages\motor-vehicle-data\components\black-smoke-truck-ranking\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import ScrollList from "@src/components/scroll-list";
import "./index.scss";

interface IBlackSmokeTruckRankingProps {}

const BlackSmokeTruckRanking: FC<IBlackSmokeTruckRankingProps> = () => {
  return (
    <Box title="黑烟车车辆名单" className="app-blackSmokeTruckRanking">
      <div className="table-head">
        <span>序号</span>
        <span className="span-2">时间</span>
        <span>车牌号码</span>
      </div>
      <ScrollList
        rows={3}
        rolling={true}
        lineHeight={30}
        data={[
          { b: "2022-10-28 15:32:23", c: "晋F 33456" },
          { b: "2022-10-28 15:32:23", c: "晋F 33456" },
          { b: "2022-10-28 15:32:23", c: "晋F 33456" },
          { b: "2022-10-28 15:32:23", c: "晋F 33456" },
          { b: "2022-10-28 15:32:23", c: "晋F 33456" },
        ]}
        render={(data) => {
          return (
            <>
              {data.map((item: any) => (
                <div
                  className={`tr ${item._customId % 2 === 1 ? "odd" : ""}`}
                  key={item._customId}
                >
                  <span className="td">{item._customId + 1}</span>
                  <span className="td td-2">{item.b}</span>
                  <span className="td">{item.c}</span>
                </div>
              ))}
            </>
          );
        }}
      />
    </Box>
  );
};

export default BlackSmokeTruckRanking;
