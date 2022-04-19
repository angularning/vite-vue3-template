export class Message {
    /**
     * 规则：
     * * loading message只显示一个，新的message会替换正在显示的loading message
     * * loading message不会自动清除，除非被替换成非loading message，非loading message默认2秒后自动清除
     */
  
    removeMessage(message, duration = 2000) {
      setTimeout(() => {
        if (message) {
          message.destroy()
          message = null
        }
      }, duration)
    }
  
    showMessage(type :string, content: string, option = {duration: 2000}) {
      if (loadingMessage && loadingMessage.type === 'loading') {
        // 如果存在则替换正在显示的loading message
        loadingMessage.type = type
        loadingMessage.content = content
  
        if (type !== 'loading') {
          // 非loading message需设置自动清除
          this.removeMessage(loadingMessage, option.duration)
        }
      } else {
        // 不存在正在显示的loading则新建一个message,如果新建的message是loading message则将message赋值存储下来
        let message = NMessage[type](content, option)
        if (type === 'loading') {
          loadingMessage = message
        }
      }
    }
  
    loading(content :string) {
      this.showMessage('loading', content, { duration: 0 })
    }
  
    success(content :string, option = {}) {
      this.showMessage('success', content, option)
    }
  
    error(content :string, option = {}) {
      this.showMessage('error', content, option)
    }
  
    info(content, option = {}) {
      this.showMessage('info', content, option)
    }
  
    warning(content, option = {}) {
      this.showMessage('warning', content, option)
    }
  }
