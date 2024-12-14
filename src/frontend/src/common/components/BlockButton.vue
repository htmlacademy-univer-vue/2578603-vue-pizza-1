<template>
  <button
    class="button"
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue
    :class="{
      'button--bordered': bordered,
      'button--transparent': transparent,
    }"
========
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue
  name: "BaseButton",

========
  name: "BlockButton",
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
  props: {
    type: {
      type: String,
      default: "button",
    },
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue

========
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
    disabled: {
      type: Boolean,
      default: false,
    },
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue

    bordered: {
      type: Boolean,
      default: false,
    },

    transparent: {
      type: Boolean,
      default: false,
    },
========
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
  },
};
</script>

<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue
<style lang="scss" scoped>
========
<style lang="scss">
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
.button {
  @include b-s18-h21;

  font-family: inherit;
  padding: 16px 45px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  color: $white;
  border: 1px solid $green-500;
  border-radius: 8px;
  outline: none;
  background-color: $green-500;
  box-shadow: $shadow-medium;

<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue
========
  background-color: $green-500;

>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
  &:hover {
    background-color: $green-400;
    border-color: $green-400;
  }

  &:active {
    background-color: $green-600;
    border-color: $green-600;
  }

  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    background-color: $green-300;
    border-color: $green-300;
    color: rgba($white, 0.2);
    cursor: default;
  }

  &--bordered {
    background-color: transparent;
    color: $black;
    box-shadow: none;

<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseButton.vue
    &:hover {
========
    &:hover:not(:disabled) {
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockButton.vue
      color: $green-500;
      background-color: transparent;
      border-color: $green-400;
    }

    &:active {
      color: $green-600;
      background-color: transparent;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  &--transparent {
    @include b-s14-h16;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: $black;

    &:hover:not(:disabled) {
      color: $red-800;
      background-color: transparent;
      border-color: transparent;
    }

    &:active:not(:disabled) {
      color: $red-900;
      background-color: transparent;
      border-color: transparent;
    }

    &:disabled {
      opacity: 0.25;
    }
  }
}
</style>
