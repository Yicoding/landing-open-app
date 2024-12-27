/**
 * title:
 * desc:
 * defaultShowCode: true
 */

import { LandingOpenApp } from 'landing-open-app';
import React from 'react';

export default () => {
  return (
    <LandingOpenApp cid="xxx" iting="iting://open?msg_type=14&url=xxx" ready>
      <button>打开App</button>
    </LandingOpenApp>
  );
};
