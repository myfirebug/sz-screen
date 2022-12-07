/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 18:57:29
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-12-07 22:28:12
 * @FilePath: \sz-screen\src\components\gmap\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import "./index.scss";

interface IMapProps {
  init?: (emap: any) => void;
  children?: ReactNode;
}

let satelliteLayer: any = null;

const Map: FC<IMapProps> = ({ init, children }) => {
  let [amap, setAmap] = useState<any>(null);
  // 正常地图|卫星地图
  const [mode, setMode] = useState(false);
  // 初始化地图
  useEffect(() => {
    setAmap(
      new window.AMap.Map("map", {
        center: [window.centerLng, window.centerLat],
        viewMode: "2D", //使用3D视图
        WebGLParams: {
          preserveDrawingBuffer: true,
        },
        mapStyle: "amap://styles/darkblue",
      })
    );
  }, []);
  useEffect(() => {
    if (amap) {
      satelliteLayer = new window.AMap.TileLayer.Satellite();
      // 可视窗口限制
      window.AMap.plugin("AMap.DistrictSearch", function () {
        // 创建行政区查询对象
        var district = new window.AMap.DistrictSearch({
          // 返回行政区边界坐标等具体信息
          extensions: "all",
          // 设置查询行政区级别为 区
          level: "district",
        });
        district.search(
          process.env.REACT_APP_CENTER_CITY,
          function (status: any, result: any) {
            // 获取行政区域的边界信息
            var bounds = result.districtList[0].boundaries;
            var polygons = [];
            if (bounds) {
              for (var i = 0, l = bounds.length; i < l; i++) {
                //生成行政区划polygon
                var polygon = new window.AMap.Polygon({
                  map: amap,
                  strokeWeight: 1,
                  path: bounds[i],
                  fillOpacity: 0.2,
                  fillColor: "#272c2d",
                  strokeColor: "#f7d01b",
                });
                polygons.push(polygon);
              }
              // 地图自适应
              // amap.setFitView();
            }
          }
        );
      });
      typeof init === "function" && init(amap);
    }
  }, [init, amap]);
  //切换地图
  const modeHandler = useCallback(() => {
    if (amap) {
      setMode((state) => {
        if (state) {
          amap.remove(satelliteLayer);
        } else {
          amap.add(satelliteLayer);
        }
        return !state;
      });
    }
  }, [amap]);
  return (
    <div className="app-gmap">
      <div className="bg"></div>
      {children ? children : null}
      <div
        className={`switch-mode ${mode ? "is-active" : ""}`}
        onClick={modeHandler}
      >
        卫星地图
      </div>
      <div className="container" id="map"></div>
    </div>
  );
};

export default Map;
