export type WxLabelParams = {
  /** 微信sdk是否加载完成 */
  ready: boolean;
  /** 所需跳转的移动应用的AppID */
  appid?: string;
  /** 跳转成功后回调（可在此方法上报埋点） */
  callBack?: () => void;
  /** 额外上报信息 */
  extraInfo?: Record<string, any>;
};
