import { useStorage } from "@vueuse/core"
import { PiniaPluginContext } from "pinia"
import { toRaw } from "vue"

type Options = {
  key: string
  needKeepIds?: string[]
}

const piniaPlugin = (options: Options) => {
  const { key, needKeepIds = [] } = options
  return (context: PiniaPluginContext) => {
    const { store } = context
    console.log(context)
    // console.log(`${key ?? "pinia"}-${store.$id}`)
    // const data = useStorage(`${key ?? "pinia"}-${store.$id}`,toRaw(store.$state), sessionStorage)
    if (needKeepIds.length === 0) {
      store.$subscribe(() => {
        useStorage(`${key ?? "pinia"}-${store.$id}`, toRaw(store.$state), sessionStorage)
      })
    } else {
      needKeepIds.includes(store.$id) &&
        store.$subscribe(() => {
            useStorage(`${key ?? "pinia"}-${store.$id}`, toRaw(store.$state), sessionStorage)
        })
    }

    // return {
    //   ...data,
    // }
  }
}

export default piniaPlugin

