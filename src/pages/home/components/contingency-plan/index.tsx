/*
 * @Description: 应急预案
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 10:00:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 12:03:19
 * @FilePath: \my-app\src\pages\home\components\contingency-plan\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import { Row, Col } from "antd";
import Box from "@src/components/box";
import Button from "@src/components/button";
import "./index.scss";

interface IContingencyPlanProps {}

const ContingencyPlan: FC<IContingencyPlanProps> = () => {
  return (
    <Box className="app-contingency-plan" title="应急预案">
      <Row>
        <Col span="24" className="title">
          实施人员
        </Col>
        <Col>
          <Button>李晓华</Button>
          <Button>李晓华</Button>
          <Button>李晓华</Button>
          <Button>李晓华</Button>
        </Col>
      </Row>
      <Row>
        <Col className="title">任务内容</Col>
        <Col className="content">
          干元处维非加年型列亲县作量根农新机越用在历学始部说酸新反领至转什通收长设个于规单定且它所验除治西事度意置干元处维非加年型列亲县。
        </Col>
      </Row>
      <Row>
        <Col className="title">应急物资位置</Col>
        <Col className="address">
          <span>朔州市朔城区区政府</span>
          <span>朔州市朔城区北关路滨河湾南门</span>
          <span>顺义路与滨河南路交叉路北120米</span>
          <span>朔州市第二中学西门</span>
          <span>街坊路120号</span>
        </Col>
      </Row>
    </Box>
  );
};

export default ContingencyPlan;
