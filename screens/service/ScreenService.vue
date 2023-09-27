<script setup lang="ts">
import { IService } from '~/interfaces/IService'
import ServiceInformation from '~/components/section/service/serviceInformation.vue'
import ServicePackageContent from '~/components/section/service/servicePackageContent.vue'
import ServiceAll from '~/components/section/service/serviceAll.vue'

const props = defineProps<{
  service:IService
}>()
// eslint-disable-next-line vue/no-setup-props-destructure
const service = props.service
</script>

<template>
  <div class="screenService">
    <ServiceInformation v-if="service.id === 2" />
    <ServicePackageContent v-if="service.id === 3" :service="service" />
    <ServiceAll v-if="service.id === 1" :service="service" />
  </div>
</template>

<style scoped lang="scss">

</style>
