<template>
  <div class="filling">
<<<<<<< Updated upstream
    <p class="filling__title">Начинка:</p>

    <ul class="filling__list">
      <li
        v-for="(ingredient, i) of mergedIngredients"
        :key="`ingredient-${ingredient.id}`"
        class="filling__item"
      >
        <AppDrag
          :transferData="{ ingredientId: ingredient.id }"
          :draggable="ingredient.quantity < max"
          :data-test="`ingredient-${ingredient.id}`"
        >
          <span
            :class="`filling__name`"
            :style="`--bg: url(${ingredient.image})`"
          >
            {{ ingredient.name }}
          </span>
        </AppDrag>

        <BaseCounter
          class="filling__counter"
          v-model.number="ingredient.quantity"
          :max="max"
          @input="inputHandler($event, i)"
=======
    <p>Начинка:</p>

    <ul class="filling__list">
      <li
        v-for="{ alias, name } of ingredients"
        :key="alias"
        class="filling__item"
      >
        <AppDrag
          :transferData="{ ingredient: alias }"
          :draggable="value[alias] < max"
        >
          <span :class="`filling__name filling__name--${alias}`">
            {{ name }}
          </span>
        </AppDrag>

        <BlockCounter
          class="filling__counter"
          v-model.number="value[alias]"
          :max="max"
          @input="changeIngredients(alias, $event)"
>>>>>>> Stashed changes
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { MAX_INGREDIENT_QUANTITY } from "@/common/constants";
<<<<<<< Updated upstream

export default {
  name: "BuilderFillingSelector",

=======
import BlockCounter from "@/common/components/BlockCounter.vue";
import AppDrag from "@/common/components/AppDrag.vue";

export default {
  name: "BuilderFillingSelector",
  components: {
    BlockCounter,
    AppDrag,
  },
>>>>>>> Stashed changes
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
<<<<<<< Updated upstream

    value: {
      type: Array,
      required: true,
    },
  },

=======
    value: {
      type: Object,
      required: true,
    },
  },
>>>>>>> Stashed changes
  data() {
    return {
      max: MAX_INGREDIENT_QUANTITY,
    };
  },
<<<<<<< Updated upstream

  computed: {
    mergedIngredients() {
      return this.ingredients.map((item) => {
        const { quantity } = this.value.find(
          ({ ingredientId }) => ingredientId === item.id
        );

        return {
          ...item,
          quantity,
        };
      });
    },
  },

  methods: {
    inputHandler(quantity, i) {
      const newValue = this.value.slice();
      newValue[i].quantity = quantity;

      this.$emit("input", newValue);
=======
  methods: {
    changeIngredients(alias, quantity) {
      this.$emit("input", {
        ...this.value,
        [alias]: quantity,
      });
>>>>>>> Stashed changes
    },
  },
};
</script>

<<<<<<< Updated upstream
<style lang="scss" scoped>
.filling {
  width: 100%;
}

.filling__title {
  margin-top: 24px;
  margin-bottom: 16px;
=======
<style lang="scss">
.filling {
  width: 100%;

  p {
    margin-top: 24px;
    margin-bottom: 16px;
  }
>>>>>>> Stashed changes
}

.filling__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -35px 0 0 -17px;
}

.filling__item {
  width: 100px;
  min-height: 40px;
  margin-top: 35px;
  margin-left: 17px;
}

.filling__name {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  &::before {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    content: "";

    border-radius: 50%;
    background-color: $white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 80%;
<<<<<<< Updated upstream
    background-image: var(--bg);
=======
  }

  &--tomatoes::before {
    background-image: url("~@/assets/img/filling/tomatoes.svg");
  }

  &--ananas::before {
    background-image: url("~@/assets/img/filling/ananas.svg");
  }

  &--bacon::before {
    background-image: url("~@/assets/img/filling/bacon.svg");
  }

  &--blue_cheese::before {
    background-image: url("~@/assets/img/filling/blue_cheese.svg");
  }

  &--cheddar::before {
    background-image: url("~@/assets/img/filling/cheddar.svg");
  }

  &--chile::before {
    background-image: url("~@/assets/img/filling/chile.svg");
  }

  &--ham::before {
    background-image: url("~@/assets/img/filling/ham.svg");
  }

  &--jalapeno::before {
    background-image: url("~@/assets/img/filling/jalapeno.svg");
  }

  &--mozzarella::before {
    background-image: url("~@/assets/img/filling/mozzarella.svg");
  }

  &--mushrooms::before {
    background-image: url("~@/assets/img/filling/mushrooms.svg");
  }

  &--olives::before {
    background-image: url("~@/assets/img/filling/olives.svg");
  }

  &--onion::before {
    background-image: url("~@/assets/img/filling/onion.svg");
  }

  &--parmesan::before {
    background-image: url("~@/assets/img/filling/parmesan.svg");
  }

  &--salami::before {
    background-image: url("~@/assets/img/filling/salami.svg");
  }

  &--salmon::before {
    background-image: url("~@/assets/img/filling/salmon.svg");
>>>>>>> Stashed changes
  }
}

.filling__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}
</style>
