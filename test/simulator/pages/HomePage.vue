<template>
  <div>

    <div class="app-platform">{{ appPlatform }}</div>
    <div class="app-name">{{ appName }}</div>
    <div class="app-alias">({{ appAlias }})</div>
    <div class="app-version">{{ appVersion }}</div>

  </div>
</template>

<script>

export default {
  name: 'HomePage',

  components: {
  },

  computed: {
    appPlatform() {
      return this.$store.getters['app/platform'];
    },
    appName() {
      return this.$store.getters['app/name'];
    },
    appAlias() {
      return this.$store.getters['app/alias'];
    },
    appVersion() {
      return this.$store.getters['app/version'];
    },
  },

  methods: {
  },
};
</script>

<style scoped>

  .app-platform {
    color: #999999;
    font-size: 18px;
    font-style: italic;
    text-align: center;
    margin: 30px auto 10px auto;
  }
  .app-name {
    color: #121212;
    font-size: 30px;
    text-align: center;
    margin: 0 auto 10px auto;
  }
  .app-alias {
    color: #121212;
    font-size: 18px;
    text-align: center;
    margin: 10px auto 10px auto;
  }
  .app-version {
    color: #525252;
    font-size: 16px;
    font-style: italic;
    text-align: center;
    margin: 0 auto 10px auto;
  }


</style>
