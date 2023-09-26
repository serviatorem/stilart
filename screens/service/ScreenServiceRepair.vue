<script setup lang="ts">
import { IService } from '~/interfaces/IService'
import ServiceInformation from '/components/section/service/serviceInformation.vue'

const props = defineProps<{
  service:IService
}>()
// eslint-disable-next-line vue/no-setup-props-destructure
const service = props.service
</script>

<template>
  <div class="screenService">
    <ServiceInformation />
  </div>
</template>

<style scoped lang="scss">

</style>
