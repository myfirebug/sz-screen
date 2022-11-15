/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-10-30 22:11:17
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-11-15 21:49:00
 * @FilePath: \sz-screen\src\App.tsx
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
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {/*应急指挥调度默认*/}
            <Route
              path="/default"
              component={lazy(
                () =>
                  import(/*webpackChunkName:"home"*/ "@src/pages/default/index")
              )}
            />
            {/*应急指挥调度*/}
            <Route
              path="/home"
              component={lazy(
                () =>
                  import(/*webpackChunkName:"home"*/ "@src/pages/home/index")
              )}
            />
            {/*空气环境质量*/}
            <Route
              path="/air-environment"
              component={lazy(
                () =>
                  import(
                    /*webpackChunkName:"air-environment"*/ "@src/pages/air-environment"
                  )
              )}
            />
            {/*水环境质量*/}
            <Route
              path="/water-environment"
              component={lazy(
                () =>
                  import(
                    /*webpackChunkName:"water-environment"*/ "@src/pages/water-environment"
                  )
              )}
            />
            {/*机动车数据*/}
            <Route
              path="/motor-vehicle-data"
              component={lazy(
                () =>
                  import(
                    /*webpackChunkName:"motor-vehicle-data"*/ "@src/pages/motor-vehicle-data"
                  )
              )}
            />
            {/*重点污染企业*/}
            <Route
              path="/polluting-enterprises"
              component={lazy(
                () =>
                  import(
                    /*webpackChunkName:"polluting-enterprises"*/ "@src/pages/polluting-enterprises"
                  )
              )}
            />
            <Redirect path="*" exact to="/home" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
