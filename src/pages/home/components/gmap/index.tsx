import { FC, useState, useCallback, useEffect } from "react";
// 地图
import Gmap from "@src/components/gmap";
// 聊天
import Chat from "@src/components/chat";

import "./index.scss";

const mapIcon01 = require("../../../../assets/images/map-icon-01.png");
const mapIcon02 = require("../../../../assets/images/map-icon-02.png");
const mapIcon03 = require("../../../../assets/images/map-icon-03.png");

interface IHomeGmapProps {}

let infoWindow: any = null;
const HomeGmap: FC<IHomeGmapProps> = () => {
  // 选中的marckerId
  const [selectMarkcer, setSelectMarcker] = useState<any>(null);
  // 当前点击chat类型
  const [type, setType] = useState<"video" | "audio" | "message" | "">("");
  const getData = useCallback((emap: any) => {
    let markers: any[] = [];
    let list = [
      {
        name: "朔城区滨河湾小区",
        desc: "空气污染严重，PM2.5数值达到234空气污染严重，PM2.5数值达到234",
        latitude: 39.731734,
        longitude: 112.432906,
        type: 4,
        id: 1,
      },
      {
        name: "朔城区滨河湾小区",
        url: "",
        latitude: 39.531734,
        longitude: 113.432906,
        type: 3,
        id: 2,
      },
      {
        name: "朔城区滨河湾小区",
        url: "",
        latitude: 39.731774,
        longitude: 111.432906,
        type: 2,
        id: 3,
      },
      {
        name: "姓名",
        department: "部门",
        headUrl: "",
        distance: 200,
        latitude: 39.331734,
        longitude: 112.432906,
        type: 1,
        id: 4,
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
        case 3:
          content = `<img src="${mapIcon03}" />`;
          break;
        case 4:
          content = `<div class="app-marcker__content is-4"><img src="${mapIcon03}" /><div class="circle"></div></div>`;
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
    console.log(item, "item");
    let info = "";
    let PixelX = 220;
    let PixelY = 30;
    switch (item.type) {
      case 1:
        info = `<div class="app-map-infowindow is-home is-1">
          <dl class="body">
            <dt><img /></dt>
            <dd><span class="name">姓名</span><span class="value">李华</span></dd>
            <dd><span class="name">部门</span><span class="value">环境保护</span></dd>
            <dd><span class="name">距离</span><span class="value">200m</span></dd>
          </dl>
          <div class="footer">
            <button data-map="mapChat" data-type="video"><span class="video"></span>视频</button>
            <button data-map="mapChat" data-type="audio"><span class="audio"></span>语音</button>
            <button data-map="mapChat" data-type="message"><span class="message"></span>消息</button>
          </div>
        </div>`;
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        info = `<div class="app-map-infowindow is-home is-4">
          <div class="header">朔城区滨河湾小区</div>
          <div class="body">空气污染严重，PM2.5数值达到234空气污染严重，PM2.5数值达到234</div>
        </div>`;
        break;
      default:
    }
    infoWindow = new window.AMap.InfoWindow({
      isCustom: true,
      autoMove: true,
      content: info,
      offset: new window.AMap.Pixel(PixelX, PixelY),
    });
    infoWindow.open(emap, [item.longitude, item.latitude]);
  }, []);
  // 关闭弹窗
  const hideChatHander = () => {
    setType("");
    setSelectMarcker(null);
    infoWindow.close();
  };

  useEffect(() => {
    function openMapChat(e: any) {
      const target = e.target;
      const { map, type } = target.dataset;
      if (type) {
        setType(type);
      }
      if (map === "mapChat") {
        switch (type) {
          case "video":
            break;
          case "audio":
            break;
          case "message":
            break;
          default:
        }
      }
    }
    window.addEventListener("click", openMapChat);
    return () => {
      window.removeEventListener("click", openMapChat);
    };
  }, []);
  return (
    <Gmap init={getData}>
      {type && selectMarkcer && selectMarkcer.type === 1 ? (
        <Chat
          hideChatHander={hideChatHander}
          marcker={selectMarkcer}
          type={type}
        />
      ) : null}
    </Gmap>
  );
};

export default HomeGmap;
