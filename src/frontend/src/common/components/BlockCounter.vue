<template>
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue
  <div class="counter">
========
  <div class="counter counter--orange">
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="currentValue === 0"
      @click="currentValue--"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue

========
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
    <input
      type="text"
      name="counter"
      class="counter__input"
      v-model.number="currentValue"
    />
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue

    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--secondary': secondaryStyle }"
========
    <button
      type="button"
      class="counter__button counter__button--plus"
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
      :disabled="currentValue === max"
      @click="currentValue++"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { getPositiveIntFromValue } from "@/common/utils.js";

<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue
const MAX_COUNT = 99;

export default {
  name: "BaseCounter",

========
export default {
  name: "BlockCounter",
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
  props: {
    value: {
      type: Number,
      default: 0,
    },
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue

    max: {
      type: Number,
      default: MAX_COUNT,
    },

    secondaryStyle: {
      type: Boolean,
      default: false,
    },
  },

========
    max: {
      type: Number,
      required: true,
    },
  },
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue

========
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
      set(value) {
        this.$emit("input", Math.min(getPositiveIntFromValue(value), this.max));
      },
    },
  },
};
</script>

<<<<<<<< Updated upstream:src/frontend/src/common/components/BaseCounter.vue
<style lang="scss" scoped>
========
<style lang="scss">
>>>>>>>> Stashed changes:src/frontend/src/common/components/BlockCounter.vue
.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $purple-200;
    }

    &:active:not(:disabled) {
      background-color: $purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $green-400;
    }

    &:active:not(:disabled) {
      background-color: $green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--secondary {
    background-color: $orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: $orange-100;
    }

    &:active:not(:disabled) {
      background-color: $orange-300;
    }
  }
}

.counter__input {
  @include r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}
</style>
