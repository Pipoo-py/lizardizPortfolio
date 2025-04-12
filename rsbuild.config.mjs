import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const repoName = 'lizardizPortfolio';

export default defineConfig({
  plugins: [pluginReact()],
  output:{
     assetPrefix: `/${repoName}/`, 
  }
});
