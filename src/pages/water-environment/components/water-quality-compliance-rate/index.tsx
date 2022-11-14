/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 13:37:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-06 21:00:45
 * @FilePath: \sz-screen\src\pages\water-environment\components\water-quality-compliance-rate\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import Box from "@src/components/box";
import Button from "@src/components/button";
import ScrollList from "@src/components/scroll-list";
import "./index.scss";

interface IWaterQualityComplianceRateProps {}

const WaterQualityComplianceRate: FC<IWaterQualityComplianceRateProps> = () => {
  return (
    <Box
      title="各区县水质达标率"
      className="app-waterQualityComplianceRate"
      operation={
        <>
          <Button type="primary">当年</Button>
          <Button style={{ marginLeft: 10 }}>当月</Button>
        </>
      }
    >
      <ScrollList
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
                  <div className={`sort sort-${item._customId}`}>
                    {item._customId > 2 ? item._customId + 1 : null}
                  </div>
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

export default WaterQualityComplianceRate;
