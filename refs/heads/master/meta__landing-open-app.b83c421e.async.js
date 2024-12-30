"use strict";(self.webpackChunklanding_open_app=self.webpackChunklanding_open_app||[]).push([[791],{7887:function(I,r,e){var l;e.r(r),e.d(r,{demos:function(){return E}});var c=e(15009),h=e.n(c),g=e(99289),C=e.n(g),p=e(67294),B=e(96167),_=e(84129),E={"landing-open-app-demo-basic":{component:p.memo(p.lazy(function(){return e.e(163).then(e.bind(e,39552))})),asset:{type:"BLOCK",id:"landing-open-app-demo-basic",refAtomIds:["landing-open-app"],dependencies:{"index.tsx":{type:"FILE",value:e(10088).Z},"landing-open-app":{type:"NPM",value:"1.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:null},context:{"landing-open-app":_,react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var y=C()(h()().mark(function L(){var v,O=arguments;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(335).then(e.bind(e,37335));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,O));case 3:case"end":return i.stop()}},L)}));function A(){return y.apply(this,arguments)}return A}()}}}},84129:function(I,r,e){e.r(r),e.d(r,{LandingOpenApp:function(){return i}});var l=e(67294),c="xxx",h=e(5574);function g(){var a="android",n=window.navigator.userAgent;return/android/i.test(n)?a="android":n.match(/iPhone|iPad|iPod/i)&&(a="ios"),a}function C(a){var n="; ".concat(document.cookie),t=n.split("; ".concat(a,"=")),o=_slicedToArray(t,2),d=o[1];if(d)return d.split(";").shift()}function p(){var a="xxx",n=window.navigator.userAgent;return/xxx/i.test(n)?a="xxx":/micromessenger/i.test(n)?a="wechat":/weibo/i.test(n)?a="weibo":/qq\//i.test(n)?a="qq":a="_default",a}function B(){if(p()!=="wechat"||g()==="android")return!1;window.sessionStorage.setItem("showSafeBar","true")}var _=function(n){var t=n.notgoApp,o=n.extraInfo,d=o===void 0?{}:o;console.log("extraInfo",d),t||B()};function E(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c;return`
    <wx-open-launch-app
      class="arouse_wxtag"
      id="launch-btn"
      appid="`.concat(a,`"
      extinfo=""
      style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 9;"
    >
      <template>
        <style>.btn { opacity:0; height: 100vh; }</style>
        <div class='btn' ></div>
      </template>
    </wx-open-launch-app>
`)}function y(a){a&&(console.log("changeWxExtinfo"),a.setAttribute("extinfo"))}function A(a){var n=a.domElement,t=a.callBack,o=a.appid,d=a.extraInfo;if(console.log("appid",o),!(p()!=="wechat"||!n)){if(n){var m=getComputedStyle(n);(m.position==="static"||!m.position)&&(n.style.position="relative")}if(n.getElementsByClassName("arouse_wxtag")[0]){var u=n.getElementsByTagName("wx-open-launch-app")[0];y(u);return}var f=document.createRange().createContextualFragment(E());n.appendChild(f);var s=n.getElementsByClassName("arouse_wxtag")[0];s&&(s.addEventListener("launch",function(){console.log("wxLaunchBtn launch"),t==null||t(),_({notgoApp:!0,extraInfo:d})}),s.addEventListener("error",function(){console.log("wxLaunchBtn error"),t==null||t(),_({extraInfo:d})}))}}function L(){if(p()!=="wechat"||g()==="android")return!1;var a=window.innerHeight,n=screen.height;return n>a}var v=e(85893),O=function(n){var t=n.ready,o=n.children,d=n.appid,m=d===void 0?c:d,u=n.callBack,f=n.extraInfo,s=(0,l.useRef)(null);(0,l.useEffect)(function(){!t||!s.current||A({domElement:s.current,appid:m,callBack:u,extraInfo:f})},[u,f,m,t]);var D=function(){u==null||u(),p()!=="xxx"&&_({extraInfo:f})},M=l.isValidElement(o)?l.cloneElement(o,{onClick:function(T){var x,P;o==null||(x=o.props)===null||x===void 0||(P=x.onClick)===null||P===void 0||P.call(x,T),D()},ref:s}):o;return(0,v.jsx)(v.Fragment,{children:M})},w=O,i=w},31593:function(I,r,e){e.r(r),e.d(r,{texts:function(){return c}});var l=e(96167);const c=[{value:"\u7AD9\u5916\u5524\u7AEF\u7EC4\u4EF6\uFF0C\u652F\u6301\u5FAE\u4FE1\u5F00\u653E\u6807\u7B7E\u548C\u5176\u4ED6\u6D4F\u89C8\u5668\u73AF\u5883",paraId:0,tocIndex:0},{value:`yarn add landing-open-app
`,paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"ready",paraId:2,tocIndex:3},{value:"\u5FAE\u4FE1 sdk \u662F\u5426\u52A0\u8F7D\u5B8C\u6210",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"appid",paraId:2,tocIndex:3},{value:"\u6240\u9700\u8DF3\u8F6C\u7684\u79FB\u52A8\u5E94\u7528\u7684 AppID",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"extraInfo",paraId:2,tocIndex:3},{value:"\u989D\u5916\u4E0A\u62A5\u4FE1\u606F",paraId:2,tocIndex:3},{value:"Record<string, any>",paraId:2,tocIndex:3},{value:"{}",paraId:2,tocIndex:3},{value:"callBack",paraId:2,tocIndex:3},{value:"\u8DF3\u8F6C\u6210\u529F\u540E\u56DE\u8C03\uFF08\u53EF\u5728\u6B64\u65B9\u6CD5\u4E0A\u62A5\u57CB\u70B9\uFF09",paraId:2,tocIndex:3},{value:"void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u4F9D\u8D56\u9879\uFF08\u8BF7\u786E\u4FDD\u4F7F\u7528\u7EC4\u4EF6\u7684\u9879\u76EE\u5B89\u88C5\u4E86\u4EE5\u4E0B\u4F9D\u8D56\uFF09\uFF1A",paraId:3,tocIndex:4},{value:'"react": ">=16.8.0"',paraId:4,tocIndex:4},{value:'"react-dom": ">=16.8.0"',paraId:4,tocIndex:4}]},10088:function(I,r){r.Z=`import { LandingOpenApp } from 'landing-open-app';
import React, { useEffect, useState } from 'react';

export default () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // \u5FAE\u4FE1sdk\u52A0\u8F7D\u6210\u529F\u540E\u89E6\u53D1
    setReady(true);
  }, []);

  return (
    <LandingOpenApp ready={ready}>
      <button>\u6253\u5F00App</button>
    </LandingOpenApp>
  );
};
`}}]);
