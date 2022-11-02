/*
 * @Description: 事件详情
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 10:00:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 10:43:15
 * @FilePath: \my-app\src\pages\home\components\event-details\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC } from "react";
import { Row, Col } from "antd";
import Box from "@src/components/box";
import "./index.scss";

interface IEventDetailsProps {}

const EventDetails: FC<IEventDetailsProps> = () => {
  return (
    <Box
      className="app-evnet-details"
      title="事件详情"
      style={{
        height: 214,
      }}
    >
      <Row>
        <Col span={14}>
          <span className="name">发生时间</span>
          <span className="value">2022.10.23 13:45:22</span>
        </Col>
        <Col span={10}>
          <span className="name">污染源</span>
          <span className="value">-</span>
        </Col>
        <Col span={14}>
          <span className="name">事件地点</span>
          <span className="value">朔城区滨河湾小区</span>
        </Col>
        <Col span={10}>
          <span className="name">事件等级</span>
          <span className="value">I级</span>
        </Col>
        <Col>
          <span className="name">事件内容</span>
          <span className="value">
            空气污染严重，PM2.5数值达到234,空气污染严重，
            PM2.5数值达到234空气污染严重，PM2.5数值达到234
          </span>
        </Col>
      </Row>
    </Box>
  );
};

export default EventDetails;
