import React, { ReactElement, useEffect, useRef } from 'react';
import { X_APPID } from '../_utils/constants';
import { getPlatform, initWeixinOpenTag, jumpApp } from '../_utils/tools';
import { WxLabelParams } from '../_utils/types';

type Props = WxLabelParams & {
  /** 子元素 */
  children: ReactElement<any>;
};

const LandingOpenApp: React.FC<Props> = ({
  ready,
  children,
  appid = X_APPID,
  callBack,
  extraInfo,
}) => {
  const wxRef = useRef<HTMLElement>(null);

  // 初始化微信开放标签
  useEffect(() => {
    if (!ready || !wxRef.current) return;
    initWeixinOpenTag({
      domElement: wxRef.current,
      appid,
      callBack,
      extraInfo,
    });
  }, [callBack, extraInfo, appid, ready]);

  // 点击事件
  const handleClick = () => {
    callBack?.();
    // 站外再执行唤端操作
    if (getPlatform() !== 'xxx') {
      jumpApp({ extraInfo });
    }
  };
  // 克隆子元素并添加 onClick 和 ref 属性
  const clonedChild = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<any>, {
        onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          // @ts-ignore
          children?.props?.onClick?.(e);
          handleClick();
        },
        ref: wxRef, // 这里使用 ref 的类型断言
      })
    : children;

  return <>{clonedChild}</>;
};

export default LandingOpenApp;
