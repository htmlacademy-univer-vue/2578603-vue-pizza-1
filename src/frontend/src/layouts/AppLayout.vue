<template>
<<<<<<< Updated upstream
  <Component
    :is="layout"
    :content="content"
    :user="user"
    :data-test="layoutName"
  />
</template>

<script>
import { mapState } from "vuex";

const DEFAULT_LAYOUT = "AppLayoutDefault";

export default {
  name: "AppLayout",

  computed: {
    ...mapState(["content"]),

    ...mapState("Profile", ["user"]),

    layoutName() {
      const { layout = DEFAULT_LAYOUT } = this.$route.meta || {};
      return layout;
    },

    layout() {
      const { layout = DEFAULT_LAYOUT } = this.$route.meta || {};
      return () => import(`@/layouts/${layout}.vue`);
    },
=======
  <div>
    <AppLayoutHeader :orders="orders" />

    <IndexView @order="orders.push($event)" />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
import IndexView from "@/views/IndexView.vue";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    IndexView,
  },
  data() {
    return {
      orders: [],
    };
>>>>>>> Stashed changes
  },
};
</script>
