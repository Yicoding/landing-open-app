---
title: LandingOpenApp
order: 1
mobile: false
nav:
  title: components
  path: /components
---

# LandingOpenApp

站外唤端组件，支持微信开放标签和其他浏览器环境

## 安装

```bash
yarn add landing-open-app
```

## 基本用法

<code src="./demos/Basic.tsx"></code>

## API

| 属性               | 说明                                 | 类型                  | 默认值          |
| ------------------ | ------------------------------------ | --------------------- | --------------- |
| btnText            | 按钮文案                             | `string`              | `畅听精彩内容`  |
| contentLeftElement | 自定义主体左侧内容                   | `React.ReactNode`     | -               |
| contentElement     | 自定义主体内容                       | `React.ReactNode`     | -               |
| rootClassName      | 根节点样式                           | `string`              | -               |
| ready              | 微信 sdk 是否加载完成                | `boolean`             | `false`         |
| appid              | 所需跳转的移动应用的 AppID           | `string`              | - |
| cid                | 唤端 cid                             | `string`              | -               |
| extraInfo          | 串码额外上报信息                     | `Record<string, any>` | `{}`            |
| iting              | iting 跳转地址                       | `string`              | -               |
| callBack           | 跳转成功后回调（可在此方法上报埋点） | `void`                | -               |

## 说明

- 依赖项（请确保使用组件的项目安装了以下依赖）：

  - `"react": ">=16.8.0"`
  - `"react-dom": ">=16.8.0"`
