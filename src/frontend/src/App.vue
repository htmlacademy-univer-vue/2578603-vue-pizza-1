<template>
  <div id="app">
    <AppLayout />
<<<<<<< Updated upstream

    <AppNotifications />
=======
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import { setAuth } from "@/common/helpers";
import AppLayout from "@/layouts/AppLayout.vue";
import AppNotifications from "@/modules/notifications/components/AppNotifications";
=======
import AppLayout from "@/layouts/AppLayout.vue";
>>>>>>> Stashed changes

export default {
  name: "App",

  components: {
    AppLayout,
<<<<<<< Updated upstream
    AppNotifications,
  },

  created() {
    window.onerror = function (msg, url, line, col, error) {
      console.error(error);
    };

    if (this.$jwt.getToken()) {
      setAuth(this.$store);
    }

    this.$store.dispatch("init");
=======
>>>>>>> Stashed changes
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
