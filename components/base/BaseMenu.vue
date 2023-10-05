<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import OpacityTransition from '~/components/transition/OpacityTransition.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import ModalWrapper from '~/components/modal/ModalWrapper.vue'
import BaseModal from '~/components/base/BaseModal.vue'

defineEmits<{
  clickNav: [];
}>()
</script>

<template>
  <div class="menu" @click="$emit('clickNav')">
    <BaseNavigation type="wide" />
    <div class="header__content-question">
      <BaseButton
        type="header-burger"
        @click="modalVision = true"
      >
        Задать вопрос
      </BaseButton>
      <Teleport to="body">
        <OpacityTransition>
          <ModalWrapper v-if="modalVision" @hide-modal="modalVision = false">
            <BaseModal />
          </ModalWrapper>
        </OpacityTransition>
      </Teleport>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(0.6);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:0;
}
</style>
