<template>
  <Transition name="opacity">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
</script>
<style lang="scss">

.opacity-enter-active,
.opacity-leave-active {
  transition: opacity .3s linear;
}
.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>
