/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 12:43:43
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-03 19:07:19
 * @FilePath: \sz-screen\src\pages\motor-vehicle-data\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import SidebarLeft from "@src/components/sidebar-left";
import SidebarRight from "@src/components/sidebar-right";
// 机动车数据
import MotorVehicle from "./components/motor-vehicle";
// 机动车尾气检测合格率
import ExhaustRate from "./components/exhaust-rate";
// 汽油车尾气检测合格率
import PetrolEngineCar from "./components/petrol-engine-car";
// 各等级黑烟车数量及占比
import BlackSmokeTruck from "./components/black-smoke-truck";
// 各污染类型分析
import PollutionTypeAnalysis from "./components/pollution-type-analysis";
// 黑烟车车辆名单
import BlackSmokeTruckRanking from "./components/black-smoke-truck-ranking";
// 尾部
import Footer from "@src/components/footer";
// 地图
import Gmap from "@src/components/gmap";

interface IMotorVehicleDataProps {
  location: any;
}

const MotorVehicleData: FC<IMotorVehicleDataProps> = ({ location }) => {
  return (
    <>
      <div className="app-main">
        <SidebarLeft>
          {/* 机动车数据 */}
          <MotorVehicle />
          {/* 机动车尾气检测合格率 */}
          <ExhaustRate />
          {/* 汽油车尾气检测合格率 */}
          <PetrolEngineCar />
        </SidebarLeft>
        <Gmap />
        <SidebarRight>
          {/* 各等级黑烟车数量及占比 */}
          <BlackSmokeTruck />
          {/* 各污染类型分析 */}
          <PollutionTypeAnalysis />
          {/* 黑烟车车辆名单 */}
          <BlackSmokeTruckRanking />
          {/* 黑烟车车辆名单 */}
          <BlackSmokeTruckRanking />
        </SidebarRight>
      </div>
      <Footer path={location.pathname} />
    </>
  );
};

export default MotorVehicleData;
