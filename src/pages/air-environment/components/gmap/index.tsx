import { FC, useState, useCallback, useEffect } from "react";
// 地图
import Gmap from "@src/components/gmap";
// 聊天
import CustomDialog from "./components/custom-dialog";

import DigitalScroll from "@src/components/widget-digital-scroll";

import "./index.scss";

const mapIcon01 = require("../../../../assets/images/map-air-icon-01.png");
const mapIcon02 = require("../../../../assets/images/map-air-icon-02.png");

interface IHomeGmapProps {}

let infoWindow: any = null;
const HomeGmap: FC<IHomeGmapProps> = () => {
  // 选中的marckerId
  const [selectMarkcer, setSelectMarcker] = useState<any>(null);
  // 显示弹窗
  const [visible, setVisible] = useState(false);
  const getData = useCallback((emap: any) => {
    let markers: any[] = [];
    let list = [
      {
        name: "滨河湾水质检测站",
        latitude: 39.731734,
        longitude: 112.432906,
        type: 1,
        id: 1,
      },
      {
        name: "朔城区滨河湾小区",
        latitude: 39.531734,
        longitude: 113.432906,
        type: 2,
        id: 2,
      },
      {
        name: "朔城区滨河湾小区",
        latitude: 39.731774,
        longitude: 111.432906,
        type: 2,
        id: 3,
      },
    ];
    list.map((item) => {
      let content = "";
      switch (item.type) {
        case 1:
          content = `<img src="${mapIcon01}" />`;
          break;
        case 2:
          content = `<img src="${mapIcon02}" />`;
          break;
        default:
      }
      // 设置marker
      const marker = new window.AMap.Marker({
        position: new window.AMap.LngLat(item.longitude, item.latitude),
        offset: new window.AMap.Pixel(0, -143),
        content: content,
      });
      marker.on("click", () => {
        setSelectMarcker(item);
        // 类型1弹窗
        openInfoWindow(item, emap);
        emap.setCenter([item.longitude, item.latitude]);
      });
      markers.push(marker);
    });
    emap.add(markers);
    emap.setFitView();
  }, []);
  // 类型弹窗
  const openInfoWindow = useCallback((item: any, emap: any) => {
    let info = `<div class="app-map-infowindow is-water">
    <div class="header">${item.name}</div>
    <div class="body">
      <span>经度</span>
      <span>纬度</span>
      <span>${item.latitude}</span>
      <span>${item.longitude}</span>
    </div>
    <div class="footer" data-map="water">点位分析</div>
  </div>`;
    let PixelX = 190;
    let PixelY = 30;
    infoWindow = new window.AMap.InfoWindow({
      isCustom: true,
      autoMove: true,
      content: info,
      offset: new window.AMap.Pixel(PixelX, PixelY),
    });
    infoWindow.open(emap, [item.longitude, item.latitude]);
  }, []);
  // 关闭弹窗
  const hideHander = () => {
    setSelectMarcker(null);
    setVisible(false);
    infoWindow.close();
  };

  useEffect(() => {
    function openMapChat(e: any) {
      const target = e.target;
      const { map } = target.dataset;
      if (map === "water") {
        setVisible(true);
      }
    }
    window.addEventListener("click", openMapChat);
    return () => {
      window.removeEventListener("click", openMapChat);
    };
  }, []);
  return (
    <Gmap init={getData}>
      <div className="app-map__title">
        <ul>
          <li>
            <span className="name">国控点位总数</span>
            <DigitalScroll value="54656" />
          </li>
          <li>
            <span className="name">微站点位总数</span>
            <DigitalScroll value="9674" />
          </li>
        </ul>
      </div>
      {selectMarkcer?.id && visible ? (
        <CustomDialog title={selectMarkcer.name} hideHander={hideHander} />
      ) : null}
    </Gmap>
  );
};

export default HomeGmap;
