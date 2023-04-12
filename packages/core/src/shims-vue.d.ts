/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Global Methods https://stackoverflow.com/a/64189003
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    text: (key: string, vars?: {}, text?: {}) => string
    get: (
      obj: object,
      nestedProp: string,
      def: string | number | object | array
    ) => unknown
  }
}

export {}
