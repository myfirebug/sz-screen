/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-11-01 18:57:29
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-12 11:49:59
 * @FilePath: \sz-screen\src\pages\home\components\gmap\index.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { FC, useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import "./index.scss";

interface IMapProps {}

const Map: FC<IMapProps> = () => {
  const [map, setMap] = useState<any>(null);
  useEffect(() => {
    if (!map) {
      AMapLoader.load({
        key: "3c70a3fb6140c4fa05552d69c6dd053f", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          setMap(
            new AMap.Map("map", {
              //设置地图容器id
              zoom: 5, //初始化地图级别
              center: [105.602725, 37.076636], //初始化地图中心点位置
              mapStyle: "amap://styles/blue",
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [map]);

  console.log(map, "map");
  return (
    <div className="app-gmap">
      <div className="bg"></div>
      <div className="container" id="map"></div>
    </div>
  );
};

export default Map;
