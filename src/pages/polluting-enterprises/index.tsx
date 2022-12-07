/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-06 12:43:43
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-07 21:39:26
 * @FilePath: \sz-screen\src\pages\polluting-enterprises\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";

import SidebarLeft from "@src/components/sidebar-left";
import SidebarRight from "@src/components/sidebar-right";
// 全市各区县严重污染企业数量
import SeriousPollutersRanking from "./components/serious-polluters-ranking";
// 今日重点关注企业(3家)
import TodayFocusEnterprise from "./components/today-focus-enterprise";
// 各污染源企业数量
import PollutionSourceEnterpriseNumber from "./components/pollution-source-enterprise-number";
// 严重污染企业类型占比
import EnterpriseTypeAccounted from "./components/enterprise-type-accounted";
// 企业用电量分析
import ElectricityConsumptionAnalysis from "./components/electricity-consumption-analysis";
// 企业污染合格率月度趋势分析
import RateOfPass from "./components/rate-of-pass";
// 尾部
import Footer from "@src/components/footer";
// 地图
import PollutingGmap from "./components/gmap";

interface IPollutingEnterprisesProps {
  location: any;
}

const PollutingEnterprises: FC<IPollutingEnterprisesProps> = (
  props: IPollutingEnterprisesProps
) => {
  return (
    <>
      <div className="app-main">
        <SidebarLeft>
          {/* 全市各区县严重污染企业数量 */}
          <SeriousPollutersRanking />
          {/* 今日重点关注企业(3家) */}
          <TodayFocusEnterprise />
          {/* 各污染源企业数量 */}
          <PollutionSourceEnterpriseNumber />
          {/* 严重污染企业类型占比 */}
          <EnterpriseTypeAccounted />
        </SidebarLeft>
        <PollutingGmap />
        <SidebarRight>
          {/* 企业用电量分析 */}
          <ElectricityConsumptionAnalysis />
          {/* 企业污染合格率月度趋势分析 */}
          <RateOfPass />
        </SidebarRight>
      </div>
      <Footer path={props.location.pathname} />
    </>
  );
};

export default PollutingEnterprises;
