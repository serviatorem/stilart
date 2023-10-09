<script setup lang="ts">
withDefaults(
  defineProps<{
    type: 'transparent' | 'flat' | 'primary' | 'header-burger';
    to?: string | undefined;
  }>(),
  { type: 'transparent' }
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :class="[`button_${type}`]"
    class="button"
  >
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.button {
  width: fit-content;
  cursor: pointer;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 4px;

  &_transparent {
    border: 1px solid $white;
    background-color: $d-tree;
    color: $tree;
    font-weight: bold;
    transition: all 0.2s linear;
    &:hover{
      background: $tree;
      color:$d-tree;
    }
  }

  &_flat {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0);
    color: $tree;
    font-size: 22px;
    transition:
      color 0.2s,
      background-color 0.2s;
    &:hover{
      font-weight: bold;
    }
  }

  &_primary {
    background-color: $d-tree;
    border: 1px solid $d-tree;
    color: $white;
  }
  &_header-burger{
    background: none;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    color: $white;
  }
}
</style>
