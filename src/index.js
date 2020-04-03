import { generateStore } from './store/app'

const pluginName = 'client-app-config'
const defaultNamespace = 'app'

export default function install(Vue, options = {}) {
  // Parse options...
  const logInit = options.logInit && options.logInit === true
  const namespace = options.namespace || defaultNamespace
  const config = options.config || {}
  const settings = options.settings || {}

  if (logInit) console.log(`Vue is being bootstrapped with "${pluginName}"`)

  // Bootstrap vuex with auth session management...
  if (options.store) {
    const authSessionStore = generateStore({
      pluginName,
      settings,
      ...config,
    })
    options.store.registerModule(namespace, authSessionStore)
  }
}
