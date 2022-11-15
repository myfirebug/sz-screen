/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-15 22:12:21
 * @FilePath: \sz-screen\src\pages\default\components\water-environmental-quality\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import ScrollList from "@src/components/scroll-list";
import "./index.scss";

interface IWaterEnvironmentalQualityProps {}

const WaterEnvironmentalQuality: FC<IWaterEnvironmentalQualityProps> = () => {
  return (
    <Box title="水环境质量" className="app-waterEnvironmentalQuality">
      <div className="top">
        <div className="echarts"></div>
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
      </div>
      <div className="sub-title">全市各区县水质监测站数量</div>
      <ScrollList
        className="app-waterEnvironmentalQuality__scrollList"
        rows={6}
        rolling={true}
        lineHeight={38}
        data={[
          { name: "逆城区", total: 100, value: 23 },
          { name: "平鲁工", total: 100, value: 23 },
          { name: "怀仁市", total: 100, value: 23 },
          { name: "山阴县", total: 100, value: 23 },
          { name: "应县", total: 100, value: 23 },
          { name: "右玉县", total: 100, value: 23 },
          { name: "山阴县", total: 100, value: 23 },
          { name: "应县", total: 100, value: 23 },
          { name: "右玉县", total: 100, value: 23 },
        ]}
        render={(data) => {
          return (
            <>
              {data.map((item: any) => (
                <div
                  className="item"
                  key={item._customId}
                  style={{ height: 39 }}
                >
                  <div className="name">{item.name}</div>
                  <div className="progress">
                    <div
                      className="bar"
                      style={{
                        width: (item.value / item.total) * 100 + "%",
                      }}
                    ></div>
                  </div>
                  <div className="value">{item.value}</div>
                </div>
              ))}
            </>
          );
        }}
      />
    </Box>
  );
};

export default WaterEnvironmentalQuality;
