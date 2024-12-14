<template>
<<<<<<< Updated upstream
  <div
    @drop.stop="onDrop"
    @dragover.prevent
    @dragenter.prevent
    data-test="AppDrop"
  >
=======
  <div @drop.stop="onDrop" @dragover.prevent @dragenter.prevent>
>>>>>>> Stashed changes
    <slot />
  </div>
</template>

<script>
import { DATA_TRANSFER_PAYLOAD } from "@/common/constants";

export default {
  name: "AppDrop",
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  methods: {
    onDrop({ dataTransfer }) {
      if (!dataTransfer) {
        return;
      }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      const payload = dataTransfer.getData(DATA_TRANSFER_PAYLOAD);
      if (payload) {
        this.$emit("drop", JSON.parse(payload));
      }
    },
  },
};
</script>
