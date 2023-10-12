<script setup lang="ts">
import { projects } from '~/state'
import ScreenProject from '~/screens/project/ScreenProject.vue'
import { definePageMeta } from '#imports'
definePageMeta({
  layout: 'custom'
})
const route = useRoute()
const project = projects.find(project => project.id === Number(route.params.id))
</script>

<template>
  <ScreenProject :project="project" />
</template>

<style scoped lang="scss">

</style>
