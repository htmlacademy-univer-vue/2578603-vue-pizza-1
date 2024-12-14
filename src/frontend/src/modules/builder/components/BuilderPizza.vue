<template>
  <AppDrop
    class="pizza"
<<<<<<< Updated upstream
    :class="`pizza--foundation--${doughId}-${sauceId} pizza--size--${sizeId}`"
    @drop="onDrop"
  >
    <BuilderPizzaFilling
      v-for="{ quantity, ingredientId } in ingredients"
      :key="`filling-${ingredientId}`"
      :id="ingredientId"
      :quantity="quantity"
      :data-test="`filling-${ingredientId}`"
=======
    :class="`pizza--foundation--${dough}-${sauce} pizza--size--${size}`"
    @drop="onDrop"
  >
    <BuilderPizzaFilling
      v-for="(quantity, alias) in ingredients"
      :key="alias"
      :alias="alias"
      :quantity="quantity"
>>>>>>> Stashed changes
    />
  </AppDrop>
</template>

<script>
import { MAX_INGREDIENT_QUANTITY } from "@/common/constants";
<<<<<<< Updated upstream
=======
import AppDrop from "@/common/components/AppDrop.vue";
>>>>>>> Stashed changes
import BuilderPizzaFilling from "@/modules/builder/components/BuilderPizzaFilling.vue";

export default {
  name: "BuilderPizza",
<<<<<<< Updated upstream

  components: {
    BuilderPizzaFilling,
  },

  props: {
    doughId: {
      type: Number,
      required: true,
    },

    sauceId: {
      type: Number,
      required: true,
    },

    sizeId: {
      type: Number,
      required: true,
    },

    ingredients: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onDrop({ ingredientId }) {
      const ingredients = this.ingredients.slice();
      const targetIngredient = this.ingredients.find(
        (item) => item.ingredientId === ingredientId
      );

      if (targetIngredient.quantity >= MAX_INGREDIENT_QUANTITY) {
        return;
      }

      targetIngredient.quantity++;
=======
  components: {
    AppDrop,
    BuilderPizzaFilling,
  },
  props: {
    dough: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDrop({ ingredient }) {
      const ingredients = { ...this.ingredients };

      if (ingredients[ingredient] >= MAX_INGREDIENT_QUANTITY) {
        return;
      }

      ingredients[ingredient]++;
>>>>>>> Stashed changes
      this.$emit("change", ingredients);
    },
  },
};
</script>

<<<<<<< Updated upstream
<style lang="scss" scoped>
=======
<style lang="scss">
>>>>>>> Stashed changes
.pizza {
  position: relative;
  background-size: 100%;

<<<<<<< Updated upstream
  &--foundation--1-1 {
    background-image: url("~@/assets/img/foundation/small-creamy.svg");
  }

  &--foundation--1-2 {
    background-image: url("~@/assets/img/foundation/small-tomato.svg");
  }

  &--foundation--2-1 {
    background-image: url("~@/assets/img/foundation/big-creamy.svg");
  }

  &--foundation--2-2 {
    background-image: url("~@/assets/img/foundation/big-tomato.svg");
  }

  &--size--1 {
    transform: scale(0.9);
  }

  &--size--3 {
=======
  &--foundation--large-creamy {
    background-image: url("~@/assets/img/foundation/big-creamy.svg");
  }

  &--foundation--large-tomato {
    background-image: url("~@/assets/img/foundation/big-tomato.svg");
  }

  &--foundation--light-creamy {
    background-image: url("~@/assets/img/foundation/small-creamy.svg");
  }

  &--foundation--light-tomato {
    background-image: url("~@/assets/img/foundation/small-tomato.svg");
  }

  &--size--small {
    transform: scale(0.9);
  }

  &--size--big {
>>>>>>> Stashed changes
    transform: scale(1.1);
  }
}
</style>
