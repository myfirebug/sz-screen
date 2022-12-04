import { FC, useEffect, useMemo, useState } from "react";
import { Tooltip, Badge } from "antd";
import "./index.scss";
// 视频
import ChatVideo from "./video";
// 消息
import ChatMessage from "./message";

interface IChatProps {
  hideChatHander: () => void;
  marcker: any;
  type: "video" | "audio" | "message" | "";
}

const Chat: FC<IChatProps> = ({ hideChatHander, marcker, type }) => {
  // 是否全屏
  const [full, setFull] = useState(false);
  // 选中人员ID
  const [selectPersonnelId, setSelectPersonnelId] = useState<any>(null);
  // 人员列表
  const [personnelList, setPersonnelList] = useState([
    {
      // 用户名
      name: "应急事件群组",
      // 头像
      photo: "",
      // 0:群聊，1非群聊
      type: 0,
      // 未读
      unread: 9,
      // 描述
      desc: "系统自动创建群组",
      // 部门
      department: "",
      // id，这里的ID需要与地图marcker的ID保持一致
      id: 1,
    },
    {
      name: "狄滢",
      photo: "",
      type: 1,
      unread: 0,
      desc: "已安排相关人员前往支援…",
      department: "环保局",
      id: 2,
    },
    {
      name: "李华",
      photo: "",
      type: 1,
      unread: 0,
      desc: "已安排相关人员前往支援…",
      department: "环境保护",
      id: 4,
    },
  ]);
  useEffect(() => {
    if (marcker.id) {
      setSelectPersonnelId(marcker.id);
    }
  }, [marcker.id]);
  // 获取选中人员的信息
  const getSelectPersonnelInfo = useMemo(() => {
    return personnelList.find((item) => item.id === selectPersonnelId);
  }, [selectPersonnelId, personnelList]);
  return (
    <>
      <div className={`app-chat ${full ? "is-full" : ""}`}>
        <div className="app-chat__side">
          <div className="header">
            <Tooltip title="关闭" color="#4a8cff">
              <div className="close" onClick={hideChatHander}></div>
            </Tooltip>
            <Tooltip title={full ? "取消全屏" : "全屏"} color="#4a8cff">
              <div className="full" onClick={() => setFull(!full)}></div>
            </Tooltip>
          </div>
          <div className="body">
            <input placeholder="搜索" className="search" />
            <div className="warpper">
              <div className="list">
                {personnelList.map((item) => (
                  <div
                    className={`item ${
                      item.id === selectPersonnelId ? "is-active" : ""
                    }`}
                    key={item.id}
                    onClick={() => setSelectPersonnelId(item.id)}
                  >
                    <Badge count={item.unread} size="small">
                      <div
                        className={`photo ? ${
                          item.type === 0 ? "is-group" : ""
                        }`}
                      >
                        {item.photo ? (
                          <img src={item.photo} alt="头像" />
                        ) : null}
                      </div>
                    </Badge>
                    <div className="content">
                      <p>
                        <strong className="name">{item.name}</strong>
                        {item.department ? (
                          <span className="label">{item.department}</span>
                        ) : null}
                      </p>
                      <p className="info">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footer">创建群组</div>
        </div>
        <div className="app-chat__main">
          <div className="header">
            <span className="name">{getSelectPersonnelInfo?.name}</span>
            {getSelectPersonnelInfo?.department ? (
              <span className="label">
                {getSelectPersonnelInfo?.department}
              </span>
            ) : null}
          </div>
          <div className="body">
            {/* 视频列表 */}
            {type === "video" ? <ChatVideo /> : null}
            {/* 消息列表 */}
            {type === "message" ? <ChatMessage /> : null}
            {/* 音频列表 */}
            {type === "audio" ? <ChatMessage /> : null}
          </div>
          <div className="footer"></div>
        </div>
      </div>
      <div className="app-chat__mask" onClick={hideChatHander}></div>
    </>
  );
};

export default Chat;
