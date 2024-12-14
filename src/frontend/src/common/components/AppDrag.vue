<template>
  <div
    :draggable="draggable"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
<<<<<<< Updated upstream
    data-test="AppDrag"
=======
>>>>>>> Stashed changes
  >
    <slot />
  </div>
</template>

<script>
import { DATA_TRANSFER_PAYLOAD, MOVE } from "@/common/constants";

export default {
  name: "AppDrag",
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  props: {
    transferData: {
      type: Object,
      required: true,
    },
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    draggable: {
      type: Boolean,
      default: true,
    },
  },
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.effectAllowed = MOVE;
      dataTransfer.dropEffect = MOVE;
      dataTransfer.setData(
        DATA_TRANSFER_PAYLOAD,
        JSON.stringify(this.transferData)
      );
    },
  },
};
</script>

<style scoped>
div[draggable="true"] {
  cursor: move;
}
</style>
