/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 17:23:37
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\components\today-focus-enterprise\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import ScrollList from "@src/components/scroll-list";
import "./index.scss";

interface IKeyPollutersProps {}

const KeyPolluters: FC<IKeyPollutersProps> = () => {
  return (
    <Box title="重点污染企业" className="app-keyPolluters">
      <div className="echarts"></div>
      <div className="sub-title">今日重点关注企业(3家)</div>
      <div className="table-head">
        <span>序号</span>
        <span>所属区县</span>
        <span className="span-2">企业名称</span>
      </div>
      <ScrollList
        rolling={false}
        lineHeight={30}
        data={[
          {
            reginName: "怀仁市",
            enterpriseName: "朔州市工业自动化股份有限公司",
          },
          {
            reginName: "怀仁市",
            enterpriseName: "朔州市工业自动化股份有限公司",
          },
          {
            reginName: "怀仁市",
            enterpriseName: "朔州市工业自动化股份有限公司",
          },
        ]}
        render={(data) => {
          return (
            <>
              {data.map((item: any) => (
                <div
                  className={`tr ${item._customId % 2 === 1 ? "odd" : ""}`}
                  key={item._customId}
                >
                  <span className="td">{item._customId++}</span>
                  <span className="td">{item.reginName}</span>
                  <span className="td td-2">{item.enterpriseName}</span>
                </div>
              ))}
            </>
          );
        }}
      />
    </Box>
  );
};

export default KeyPolluters;
