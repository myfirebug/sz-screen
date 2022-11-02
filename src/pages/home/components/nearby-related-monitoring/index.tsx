/*
 * @Description: 附近相关监控
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 10:00:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 23:00:22
 * @FilePath: \my-app\src\pages\home\components\nearby-related-monitoring\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useMemo, useState } from "react";
import { Select } from "antd";
import Box from "@src/components/box";
import "./index.scss";

const { Option } = Select;

interface INearbyRelatedMonitoringProps {}

const NearbyRelatedMonitoring: FC<INearbyRelatedMonitoringProps> = () => {
  const [options] = useState([
    {
      name: "卡口监控",
      value: "1",
      data: [
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
      ],
    },
    {
      name: "网吧监控",
      value: "2",
      data: [
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
        {
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F1114%2F121420113514%2F201214113514-6-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669887150&t=bf7df81a3ddcc2ed36652a0b74e90250",
          name: "朔城区万达广场北门",
        },
      ],
    },
  ]);
  // 下拉选中的值
  const [selectId, setSelectId] = useState("1");
  // 是否一列显示
  const [isSingle, setIsSingle] = useState(true);
  // 多列表数据
  const getMultipleData = useMemo(() => {
    let index = options.findIndex((item) => item.value === selectId);
    if (index !== -1) {
      return options[index].data || [];
    }
    return [];
  }, [options, selectId]);
  return (
    <Box
      className="app-nearby-related-monitoring"
      operation={
        <>
          <Select
            size="small"
            value={selectId}
            onSelect={(value: any) => setSelectId(value)}
            style={{ width: 100 }}
          >
            {options.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.name}
              </Option>
            ))}
          </Select>
          <span
            className={`single ${isSingle ? "active" : ""}`}
            onClick={() => setIsSingle(true)}
          ></span>
          <span
            className={`multiple ${!isSingle ? "active" : ""}`}
            onClick={() => setIsSingle(false)}
          ></span>
        </>
      }
      title="附近相关监控"
    >
      {/* 单列表 */}
      <ul
        className="single-list"
        style={{ display: isSingle ? "block" : "none" }}
      >
        {options.map((item) => (
          <li className="single-item" key={item.value}>
            <div
              className={`title ${item.value === selectId ? "active" : ""}`}
              onClick={() => item.value !== selectId && setSelectId(item.value)}
            >
              {item.name}({item.data ? item.data.length : 0}个)
            </div>
            <dl
              style={{
                display: item.value === selectId ? "block" : "none",
              }}
            >
              {item.data.map((subItem: any, subIndex: number) => (
                <dd key={subIndex}>
                  <span className="name">{subItem.name}</span>
                  <span className="icon"></span>
                </dd>
              ))}
            </dl>
          </li>
        ))}
      </ul>
      {/* 多列表 */}
      <ul
        className="multiple-list"
        style={{ display: !isSingle ? "flex" : "none" }}
      >
        {getMultipleData.map((item, index) => (
          <li className="multiple-item" key={index}>
            <img src={item.url} alt="" />
            <div className="title">{item.name}</div>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default NearbyRelatedMonitoring;
