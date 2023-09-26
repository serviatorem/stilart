<script setup lang="ts">
import { definePageMeta } from '#imports'
import { services } from '~/state'
import ScreenService from '~/screens/service/ScreenService.vue'

definePageMeta({
  layout: 'custom'
})
const route = useRoute()
const service = services.find(service => service.id === Number(route.params.id))
</script>

<template>
  <ScreenService :service="service" />
</template>

<style scoped lang="scss"></style>
