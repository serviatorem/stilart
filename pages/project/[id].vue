<script setup lang="ts">
import ScreenProject from '~/screens/project/ScreenProject.vue'
import { definePageMeta } from '#imports'
import { useAPI } from '~/API'
definePageMeta({
  layout: 'custom'
})
const route = useRoute()
const useAPIStore = useAPI()
const projects = await useAPIStore.getPortfolio()
const project = projects.data.find(project => project.id === Number(route.params.id))
</script>

<template>
  <ScreenProject :project="project" />
</template>

<style scoped lang="scss">

</style>
