import { X_APPID } from './constants';

/** 设备类型 */
export type Device = 'android' | 'ios';

/**
 * 获取设备类型
 */
export function getDevice(): Device {
  let device: Device = 'android';
  const ua = window.navigator.userAgent;
  if (/android/i.test(ua)) {
    device = 'android';
  } else if (ua.match(/iPhone|iPad|iPod/i)) {
    device = 'ios';
  }
  return device;
}

/**
 * 获取某个 cookie 中某个字段的值
 * @param name 字段名
 */
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const [, parts2] = value.split(`; ${name}=`);
  if (parts2) {
    return parts2.split(';').shift();
  }
  return undefined;
}

/** 平台 */
export type Platform =
  | 'xxx'
  | 'wechat'
  | 'weibo'
  | 'qq'
  | '_default';

/**
 * 获取当前的运行平台
 */
export function getPlatform(): Platform {
  let platform: Platform = 'xxx';

  const ua = window.navigator.userAgent;
  const impl = getCookie('impl') || '';
  if (/xxx/i.test(ua) || /xxx/i.test(impl)) {
    platform = 'xxx';
  } else if (/micromessenger/i.test(ua)) {
    platform = 'wechat';
  } else if (/weibo/i.test(ua)) {
    platform = 'weibo';
  } else if (/qq\//i.test(ua)) {
    platform = 'qq';
  } else {
    platform = '_default';
  }

  return platform;
}

/** 微信环境设置sessionStorage showSafeBar */
export function setStorageShowSafeBar() {
  if (getPlatform() !== 'wechat' || getDevice() === 'android') return false;
  window.sessionStorage.setItem('showSafeBar', 'true');
}

/**
 * 跳转到应用
 *
 * @param notgoApp 是否不跳转到应用，默认为false
 */
export const jumpApp = ({
  cid,
  iting,
  notgoApp,
  extraInfo = {},
}: {
  cid: string;
  iting: string;
  notgoApp?: boolean;
  extraInfo?: Record<string, any>;
}) => {
  if (!notgoApp) {
    setStorageShowSafeBar();
  }
  // 其他唤端逻辑
  // ...
};

/**
 * 创建一个用于在微信中打开应用的HTML标签
 *
 * @returns 返回一个字符串，包含用于在微信中打开应用的HTML标签
 */
export function createWxHtml(iting: string, appid = X_APPID) {
  return `
    <wx-open-launch-app
      class="arouse_wxtag"
      id="launch-btn"
      appid="${appid}"
      extinfo="${iting}"
      style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 9;"
    >
      <template>
        <style>.btn { opacity:0; height: 100vh; }</style>
        <div class='btn' ></div>
      </template>
    </wx-open-launch-app>
`;
}

function changeWxExtinfo(extag: any, iting: string): void {
  if (!extag) return;
  console.log('changeWxExtinfo', iting);
  extag.setAttribute('extinfo', iting);
}

export function initWeixinOpenTag({
  domElement,
  iting,
  callBack,
  appid,
  cid,
  extraInfo,
}: {
  domElement: HTMLElement;
  iting: string;
  appid?: string;
  cid: string;
  callBack?: () => void;
  extraInfo?: Record<string, any>;
}) {
  if (getPlatform() !== 'wechat' || !domElement) return;
  // 添加 style 逻辑
  if (domElement) {
    const style = getComputedStyle(domElement);
    if (style.position === 'static' || !style.position) {
      domElement.style.position = 'relative';
    }
  }
  // 在微信标签上修改
  if (domElement.getElementsByClassName('arouse_wxtag')[0]) {
    const wxTagDom = domElement.getElementsByTagName('wx-open-launch-app')[0];
    changeWxExtinfo(wxTagDom, iting);
    return;
  }
  const fragment = document
    .createRange()
    .createContextualFragment(createWxHtml(iting, appid));
  domElement.appendChild(fragment);
  const wxLaunchBtn = domElement.getElementsByClassName('arouse_wxtag')[0];
  if (wxLaunchBtn) {
    wxLaunchBtn.addEventListener('launch', function () {
      console.log('wxLaunchBtn launch');
      callBack?.();
      jumpApp({ iting, notgoApp: true, cid, extraInfo });
    });
    wxLaunchBtn.addEventListener('error', function () {
      console.log('wxLaunchBtn error');
      callBack?.();
      jumpApp({ iting, cid, extraInfo });
    });
  }
}

/**
 * 判断是否存在底部安全区域
 *
 * @returns 存在底部安全区域返回true，否则返回false
 */
export function hasSafeArea() {
  if (getPlatform() !== 'wechat' || getDevice() === 'android') return false;
  // 获取窗口的内部高度
  let windowHeight = window.innerHeight;
  // 获取屏幕的高度
  let screenHeight = screen.height;
  // 判断是否存在底部安全区域
  return screenHeight > windowHeight;
}
