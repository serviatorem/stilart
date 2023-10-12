<script setup lang="ts">
import BaseButton from '~/components/base/BaseButton.vue'

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

</script>

<template>
  <div class="error">
    <div class="container error__wrapper">
      <h1 class="h1 error__title">Ошибка: {{props.error.statusCode}}</h1>
      <BaseButton type="transparent" to="/">Вернуться на главную</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .error{
    background: $d-tree;
    &__wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      gap:adpval(20,50);
      width: 100%;
      height: 100vh;
      flex-direction: column;
    }
    &__title{
      font-size: adpval(40,100);
    }
  }
</style>
