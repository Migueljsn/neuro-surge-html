import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/menteblindada/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    allowedHosts: ["amevit-amevit.hqzrjv.easypanel.host"],
  },
  preview: {
    allowedHosts: ["amevit-amevit.hqzrjv.easypanel.host"],
  },
});
