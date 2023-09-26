<template>
  <div class="modal-wrapper" @click.self="$emit('hideModal')">
    <slot />
  </div>
</template>

<script setup lang="ts">

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(['hideModal'])

</script>

<style scoped lang="scss">
.modal-wrapper {
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
