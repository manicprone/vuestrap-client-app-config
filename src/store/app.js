export function generateStore(options) {
  const pluginName = options.pluginName
  const timestamp = new Date().getTime()
  const appName = options.name || `App-${timestamp}`
  const appAlias = options.alias || `app-${timestamp}`
  const appVersion = options.version || '0.0.0'
  const appPlatform = options.platform
  const appSettings = options.settings || {}

  return {
    namespaced: true,

    state: {
      pluginName,

      // Maintains the active running app meta...
      name: appName,
      alias: appAlias,
      version: appVersion,
      platform: appPlatform,

      // Application settings for the active web version...
      settings: appSettings,
    },

    getters: {
      pluginName(state) {
        return state.pluginName
      },
      name(state) {
        return state.name
      },
      alias(state) {
        return state.alias
      },
      version(state) {
        return state.version
      },
      platform(state) {
        return state.platform
      },
      settings(state) {
        return state.settings
      },
    },

    actions: {
      setName(context, name) {
        context.commit('setAppName', name)
      },

      setAlias(context, alias) {
        context.commit('setAppAlias', alias)
      },

      setVersion(context, version) {
        context.commit('setAppVersion', version)
      },

      setPlatform(context, platform) {
        context.commit('setAppPlatform', platform)
      },

      setSettings(context, settings) {
        context.commit('setAppSettings', settings)
      },
    },

    mutations: {
      setAppName(state, name) {
        state.appName = name
      },

      setAppAlias(state, alias) {
        state.appAlias = alias
      },

      setAppVersion(state, version) {
        state.appVersion = version
      },

      setAppPlatform(state, platform) {
        state.appPlatform = platform
      },

      setAppSettings(state, settings) {
        state.settings = settings
      },
    },
  }
}
