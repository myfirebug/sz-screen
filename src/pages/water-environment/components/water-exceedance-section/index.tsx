/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-09 22:03:01
 * @FilePath: \sz-screen\src\pages\water-environment\components\water-exceedance-section\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import ScrollList from "@src/components/scroll-list";
import "./index.scss";

interface IWaterExceedanceSectionProps {}

const WaterExceedanceSection: FC<IWaterExceedanceSectionProps> = () => {
  return (
    <Box title="当月超标断面" className="app-waterExceedanceSection">
      <div className="total">
        当月超标断面总数：<b>24</b>
      </div>
      <div className="table-head">
        <span>
          断面
          <br />
          名称
        </span>
        <span>
          所属
          <br />
          地市
        </span>
        <span>
          水质目
          <br />
          标类别
        </span>
        <span>
          实际水
          <br />
          质类别
        </span>
        <span>
          断面控
          <br />
          制级别
        </span>
      </div>
      <ScrollList
        rows={5}
        rolling={true}
        lineHeight={42}
        data={[
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
          { a: "xxx", b: "xxx", c: "xxx", d: "xxx", e: "xxx" },
        ]}
        render={(data) => {
          return (
            <>
              {data.map((item: any) => (
                <div
                  className={`tr ${item._customId % 2 === 1 ? "odd" : ""}`}
                  key={item._customId}
                >
                  <span className="td">{item.a}</span>
                  <span className="td">{item.b}</span>
                  <span className="td">{item.c}</span>
                  <span className="td">{item.d}</span>
                  <span className="td">{item.e}</span>
                </div>
              ))}
            </>
          );
        }}
      />
    </Box>
  );
};

export default WaterExceedanceSection;
