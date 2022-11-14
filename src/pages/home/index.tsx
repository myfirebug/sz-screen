/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 23:02:50
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 16:53:49
 * @FilePath: \sz-screen\src\pages\home\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";

import SidebarLeft from "@src/components/sidebar-left";
import SidebarRight from "@src/components/sidebar-right";
// 事件详情
import EventDetails from "./components/event-details";
// 应急预案
import ContingencyPlan from "./components/contingency-plan";
// 附近相关监控
import NearbyRelatedMonitoring from "./components/nearby-related-monitoring";
// 事件相关通讯录
import EventRelatedAddressBook from "./components/event-related-address-book";
// 信息上报
import InformationReporting from "./components/information-reporting";
// 地图
import Gmap from "./components/gmap";
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
          {/* 事件详情 */}
          <EventDetails />
          {/* 应急预案 */}
          <ContingencyPlan />
          {/* 附近相关监控 */}
          <NearbyRelatedMonitoring />
        </SidebarLeft>
        <Gmap />
        <SidebarRight>
          {/* 事件相关通讯录 */}
          <EventRelatedAddressBook />
          {/* 信息上报 */}
          <InformationReporting />
        </SidebarRight>
      </div>
      <Footer path={props.location.pathname} />
    </>
  );
};

export default Home;
