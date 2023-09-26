<script setup lang="ts">
defineProps<{
  bgcolor:{
    type:string,
    default:'#ffffff'
  };
  padding:{
    type:string,
    default:'0px'
  }
}>()
</script>

<template>
  <div class="wrapper w" :style="{ background: bgcolor,padding: padding + ' 0'}">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: adpval(80, 120);
}
</style>
