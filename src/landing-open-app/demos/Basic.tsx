/**
 * title:
 * desc:
 * defaultShowCode: true
 */

import { LandingOpenApp } from 'landing-open-app';
import React, { useEffect, useState } from 'react';

export default () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // 微信sdk加载成功后触发
    setReady(true);
  }, []);

  return (
    <LandingOpenApp ready={ready}>
      <button>打开App</button>
    </LandingOpenApp>
  );
};
