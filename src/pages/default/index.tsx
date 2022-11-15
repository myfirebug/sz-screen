/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 23:02:50
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-15 22:15:56
 * @FilePath: \sz-screen\src\pages\default\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";

import SidebarLeft from "@src/components/sidebar-left";
import SidebarRight from "@src/components/sidebar-right";
// 空气质量指数
import AirQualityIndex from "@src/pages/air-environment/components/air-quality-index";
// 空气质量指数变化趋势
import AirQualityIndexChangeTrend from "@src/pages/air-environment/components/air-quality-index-change-trend";
// 重点污染企业
import KeyPolluters from "./components/key-polluters";
// 水环境质量
import WaterEnvironmentalQuality from "./components/water-environmental-quality";
// 机动车数据
import MotorVehicleData from "./components/motor-vehicle-data";
// 尾部
import Footer from "@src/components/footer";

interface IHomeProps {
  location: any;
}

const Home: FC<IHomeProps> = (props: IHomeProps) => {
  console.log(props);
  return (
    <>
      <div className="app-main">
        <SidebarLeft>
          {/* 空气质量指数 */}
          <AirQualityIndex />
          {/* 空气质量指数变化趋势 */}
          <AirQualityIndexChangeTrend />
          {/* 重点污染企业 */}
          <KeyPolluters />
        </SidebarLeft>
        <SidebarRight>
          {/* 水环境质量 */}
          <WaterEnvironmentalQuality />
          {/* 机动车数据 */}
          <MotorVehicleData />
        </SidebarRight>
      </div>
      <Footer path={props.location.pathname} />
    </>
  );
};

export default Home;
