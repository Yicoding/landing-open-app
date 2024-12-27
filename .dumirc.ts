import { defineConfig } from 'dumi';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? `/landing-open-app/refs/heads/master/`
    : '/';

const logo =
  'https://imagev2.xmcdn.com/storages/f8d2-audiofreehighqps/81/43/GMCoOSYIO18uAAAvaAIdYbXD.png';

export default defineConfig({
  outputPath: 'site',
  themeConfig: {
    name: 'landing-open-app',
    logo,
  },
  publicPath,
  history: {
    type: 'hash',
  },
  hash: true,
  favicons: [logo],
});
