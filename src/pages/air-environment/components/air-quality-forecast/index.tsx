/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 20:19:05
 * @FilePath: \sz-screen\src\pages\air-environment\components\air-quality-forecast\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import ScrollList from "@src/components/scroll-list";
import "./index.scss";

interface IAirQualityForecastProps {}

const AirQualityForecast: FC<IAirQualityForecastProps> = () => {
  return (
    <Box title="近7天空气质量预报" className="app-airQualityForecast">
      <ScrollList
        rows={7}
        lineHeight={45}
        rolling={false}
        data={[
          { week: "周二", date: "10-25", value: 23, total: 100 },
          { week: "周三", date: "10-25", value: 23, total: 100 },
          { week: "周四", date: "10-25", value: 23, total: 100 },
          { week: "周五", date: "10-25", value: 23, total: 100 },
          { week: "周六", date: "10-25", value: 23, total: 100 },
          { week: "周天", date: "10-25", value: 23, total: 100 },
          { week: "周一", date: "10-25", value: 23, total: 100 },
        ]}
        render={(data) => {
          return (
            <>
              {data.map((item: any) => (
                <div
                  className="item"
                  key={item._customId}
                  style={{ height: 45 }}
                >
                  <div className="name">
                    <div className="week">{item.week}</div>
                    <div className="date">{item.date}</div>
                  </div>
                  <div className="progress">
                    <div
                      className="bar"
                      style={{
                        width: (item.value / item.total) * 100 + "%",
                      }}
                    ></div>
                  </div>
                  <div className="value">{item.value}</div>
                  <div className="label">优</div>
                </div>
              ))}
            </>
          );
        }}
      />
    </Box>
  );
};

export default AirQualityForecast;
