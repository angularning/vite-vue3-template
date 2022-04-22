  interface ImportMetaEnv {
    readonly VITE_HOST_API: string
    readonly VITE_PUBLIC_PATH: string
    readonly VITE_APP_DESCRIPTION: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }