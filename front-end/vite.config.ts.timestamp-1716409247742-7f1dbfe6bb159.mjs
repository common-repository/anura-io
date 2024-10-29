// vite.config.ts
import { defineConfig } from "file:///C:/Users/xmejia/Local%20Sites/solidjs/app/public/wp-content/plugins/anura-for-wordpress/front-end/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///C:/Users/xmejia/Local%20Sites/solidjs/app/public/wp-content/plugins/anura-for-wordpress/front-end/node_modules/vite-plugin-solid/dist/esm/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin()
  ],
  server: {
    port: 3e3
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx4bWVqaWFcXFxcTG9jYWwgU2l0ZXNcXFxcc29saWRqc1xcXFxhcHBcXFxccHVibGljXFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxhbnVyYS1mb3Itd29yZHByZXNzXFxcXGZyb250LWVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceG1lamlhXFxcXExvY2FsIFNpdGVzXFxcXHNvbGlkanNcXFxcYXBwXFxcXHB1YmxpY1xcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcYW51cmEtZm9yLXdvcmRwcmVzc1xcXFxmcm9udC1lbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3htZWppYS9Mb2NhbCUyMFNpdGVzL3NvbGlkanMvYXBwL3B1YmxpYy93cC1jb250ZW50L3BsdWdpbnMvYW51cmEtZm9yLXdvcmRwcmVzcy9mcm9udC1lbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG4vLyBpbXBvcnQgZGV2dG9vbHMgZnJvbSAnc29saWQtZGV2dG9vbHMvdml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICAvKiBcbiAgICBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIGVuYWJsZSBzb2xpZC1kZXZ0b29scy5cbiAgICBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhldGFybmF2L3NvbGlkLWRldnRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy9leHRlbnNpb24jcmVhZG1lXG4gICAgKi9cbiAgICAvLyBkZXZ0b29scygpLFxuICAgIHNvbGlkUGx1Z2luKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IGBbbmFtZV0uanNgLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogYFtuYW1lXS5qc2AsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBgW25hbWVdLltleHRdYFxuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1ZSxTQUFTLG9CQUFvQjtBQUNwZ0IsT0FBTyxpQkFBaUI7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1QLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
