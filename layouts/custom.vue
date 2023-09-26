<script setup lang="ts">
import TheHeaderServices from '~/components/header/TheHeaderServices.vue'
import TheFooter from '~/components/footer/TheFooter.vue'
</script>

<template>
  <div class="layout-custom w">
    <TheHeaderServices />
    <main class="main w">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.layout-custom {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
</style>
