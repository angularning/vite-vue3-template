  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_DESCRIPTION: string
    readonly VITE_APP_KEYWORDS: string
    readonly VITE_APP_AUTHOR: string
    readonly VITE_APP_COPYRIGHT: string
    readonly VITE_APP_COPYRIGHT_URL: string
    readonly VITE_APP_COPYRIGHT_EMAIL: string
    readonly VITE_APP_COPYRIGHT_ICON: string
    readonly VITE_APP_COPYRIGHT_LOGO: string
    readonly VITE_APP_COPYRIGHT_LOGO_WIDTH: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }