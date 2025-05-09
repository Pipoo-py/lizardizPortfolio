import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html:{
    title: "Alejandro Salazar | Desarrollador Frontend React"
  },
  output:{
     assetPrefix: "/lizardizPortfolio/", 
  }
});
