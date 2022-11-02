/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 22:11:17
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-01 10:23:31
 * @FilePath: \my-app\src\App.tsx
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { Suspense, lazy, FC, useMemo } from "react";
import Loading from "@src/components/loading";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// 头部组件
import Header from "@src/components/header";
// 尾部
import Footer from "@src/components/footer";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  const scale = useMemo(() => {
    return document.body.offsetWidth / 2560;
  }, []);
  return (
    <div
      className="app-root"
      style={{
        width: 2560,
        height: 1080,
        transform: `scale(${scale})`,
        transformOrigin: "left top",
        color: "rgba(255, 255, 255, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
      <div className="app-main">
        <Suspense fallback={<Loading />}>
          <Router>
            <Switch>
              {/*首页*/}
              <Route
                path="/home"
                component={lazy(
                  () =>
                    import(/*webpackChunkName:"home"*/ "@src/pages/home/index")
                )}
              />
              <Redirect path="*" exact to="/home" />
            </Switch>
          </Router>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
