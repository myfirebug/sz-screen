/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 12:43:43
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-07 20:54:28
 * @FilePath: \sz-screen\src\pages\air-environment\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import SidebarLeft from "@src/components/sidebar-left";
import SidebarRight from "@src/components/sidebar-right";
// 空气质量指数
import AirQualityIndex from "./components/air-quality-index";
// 空气质量指数变化趋势
import AirQualityIndexChangeTrend from "./components/air-quality-index-change-trend";
// 空气质量类型
import AirQualityType from "./components/air-quality-type";
// 全市各区空气质量排名
import AirQualityRanking from "./components/air-quality-ranking";
// 全市空气质量趋势
import AirQualityTrends from "./components/air-quality-trends";
// 近7天空气质量预报
import AirQualityForecast from "./components/air-quality-forecast";
// 尾部
import Footer from "@src/components/footer";
// 地图
import AirGmap from "./components/gmap";

interface IAirEnvironmentProps {
  location: any;
}

const AirEnvironment: FC<IAirEnvironmentProps> = ({ location }) => {
  return (
    <>
      <div className="app-main">
        <SidebarLeft>
          {/* 空气质量指数 */}
          <AirQualityIndex />
          {/* 空气质量指数变化趋势 */}
          <AirQualityIndexChangeTrend />
          {/* 空气质量类型 */}
          <AirQualityType />
        </SidebarLeft>
        <AirGmap />
        <SidebarRight>
          {/* 全市各区空气质量排名 */}
          <AirQualityRanking />
          {/* 全市空气质量趋势 */}
          <AirQualityTrends />
          {/* 近7天空气质量预报 */}
          <AirQualityForecast />
        </SidebarRight>
      </div>
      <Footer path={location.pathname} />
    </>
  );
};

export default AirEnvironment;
