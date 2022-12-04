/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 12:43:43
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 16:55:56
 * @FilePath: \sz-screen\src\pages\water-environment\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import SidebarLeft from "@src/components/sidebar-left";
import SidebarRight from "@src/components/sidebar-right";
// 地表水考核分析
import WaterAssessmentAnalysis from "./components/water-assessment-analysis";
// 各区县水质达标率
import WaterQualityComplianceRate from "./components/water-quality-compliance-rate";
// 水质主要污染物占比
import WaterProportionPollutants from "./components/water-proportion-pollutants";
// 当月地表水水质等级占比
import WaterLevel from "./components/water-level";
// 当月饮用水达标率
import WaterComplianceRate from "./components/water-compliance-rate";
// 当月超标断面
import WaterExceedanceSection from "./components/water-exceedance-section";
// 尾部
import Footer from "@src/components/footer";
// 地图
import Gmap from "@src/components/gmap";

interface IWaterEnvironmentProps {
  location: any;
}

const WaterEnvironment: FC<IWaterEnvironmentProps> = ({ location }) => {
  return (
    <>
      <div className="app-main">
        <SidebarLeft>
          {/* 地表水考核分析 */}
          <WaterAssessmentAnalysis />
          {/* 各区县水质达标率 */}
          <WaterQualityComplianceRate />
          {/* 水质主要污染物占比 */}
          <WaterProportionPollutants />
        </SidebarLeft>
        <Gmap />
        <SidebarRight>
          {/* 当月地表水水质等级占比 */}
          <WaterLevel />
          {/* 当月饮用水达标率 */}
          <WaterComplianceRate />
          {/* 当月超标断面 */}
          <WaterExceedanceSection />
        </SidebarRight>
      </div>
      <Footer path={location.pathname} />
    </>
  );
};

export default WaterEnvironment;
