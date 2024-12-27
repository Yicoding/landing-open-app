export type WxLabelParams = {
  /** 微信sdk是否加载完成 */
  ready: boolean;
  /** 所需跳转的移动应用的AppID */
  appid?: string;
  /** 唤端cid */
  cid: string;
  /** iting跳转地址 */
  iting: string;
  /** 跳转成功后回调（可在此方法上报埋点） */
  callBack?: () => void;
  /** 串码额外上报信息 */
  extraInfo?: Record<string, any>;
};

/** 颜色item */
export type ColorItem = {
  color: string;
  background: string;
};
/** header组件类型 */
export type LandingHeaderProps = WxLabelParams & {
  /** 按钮文案 */
  btnText?: string;
  /** 自定义主体左侧内容 */
  contentLeftElement?: React.ReactNode;
  /** 自定义主体内容 */
  contentElement?: React.ReactNode;
  /** 根节点样式 */
  rootClassName?: string;
  /** 轮播文案 */
  rollData?: string[];
  /** 颜色列表 */
  colorList?: ColorItem[];
};
