<script setup lang="ts">
import SectionAbout from '~/components/section/index/SectionIndexAbout.vue'
import SectionProjects from '~/components/section/index/SectionIndexProjects.vue'
import SectionServices from '~/components/section/index/SectionIndexServices.vue'
import SectionStages from '~/components/section/index/SectionIndexStages.vue'
import SectionFAQ from '~/components/section/index/SectionIndexFAQ.vue'
import SectionAboutSmall from '~/components/section/index/SectionIndexAboutSmall.vue'
import SectionAdvantages from '~/components/section/index/SectionIndexAdvantages.vue'
import SectionPhone from '~/components/section/index/SectionIndexPhone.vue'
import BaseWrapper from '~/components/base/BaseWrapper.vue'
import SectionDo from '~/components/section/index/SectionIndexDo.vue'
import SectionQuestion from '~/components/section/index/SectionIndexQuestion.vue'
</script>

<template>
  <div class="index-screen">
    <SectionAboutSmall />
    <SectionDo />
    <SectionQuestion />
    <SectionServices />
    <SectionProjects />
    <SectionStages />
    <BaseWrapper :bgcolor="'#e4d2ba'" :padding="'80px'">
      <SectionAbout />
      <SectionAdvantages />
      <SectionPhone />
    </BaseWrapper>
    <SectionFAQ />
  </div>
</template>

<style scoped lang="scss">
.index-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: adpval(80, 120);
}
</style>
