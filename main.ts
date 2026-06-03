declare const Vue: any
declare const ElementPlus: any

interface Ref<T> { value: T }

const { createApp, ref } = Vue

createApp({
  setup() {
    const message: Ref<string> = ref('Hello vue!')
    return { message }
  }
}).use(ElementPlus).mount('#app')
