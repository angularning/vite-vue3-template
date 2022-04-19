import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import { createVitePlugins } from './build';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();
    const env = loadEnv(mode, root);
    const plugins = createVitePlugins(env);
    return {
        base: './', //打包路径
        plugins,
        // 配置别名
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src'),
          },
        },
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/style/main.scss";',
            },
          },
        },
        //启动服务配置
        server: {
          host: '0.0.0.0',
          port: 8000,
          open: true,
          https: false,
          proxy: {},
        },
        // 生产环境打包配置
        //去除 console debugger
        build: {
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          },
        },
    }
};
