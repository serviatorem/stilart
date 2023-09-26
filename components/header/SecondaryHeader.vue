<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import BaseBurger from '~/components/base/BaseBurger.vue'
import TransitionOpacity from '~/components/transition/TransitionOpacity.vue'
import BaseMenu from '~/components/base/BaseMenu.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import ModalWrapper from '~/components/modal/ModalWrapper.vue'
import BaseModal from '~/components/base/BaseModal.vue'
import OpacityTransition from '~/components/transition/OpacityTransition.vue'

const isBurgerOpen = ref<boolean>(false)
const modalVision = ref<boolean>(false)
function changeBurgerVisibility () {
  isBurgerOpen.value = !isBurgerOpen.value
}
</script>

<template>
  <header class="header w">
    <div class="container-bg header__content">
      <div class="header__content-nav">
        <NuxtLink to="/">
          <img src="/images/logo/logoW.svg" alt="logo" class="header__logo">
        </NuxtLink>
        <BaseNavigation style="color: black" class="header__nav" />
      </div>
      <div class="header__content-question">
        <a href="tel:+7(999)999-99-99" class="header__content-phone">
          +7(999)999-99-99
        </a>
        <BaseButton
          type="transparent"
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
      <BaseBurger
        :is-open="isBurgerOpen"
        class="header__burger-button"
        @click="changeBurgerVisibility"
      />
      <Teleport to="body">
        <TransitionOpacity>
          <BaseMenu v-if="isBurgerOpen" @click-nav="isBurgerOpen = false" />
        </TransitionOpacity>
      </Teleport>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid $white;
  background: $tree;
  padding: 10px 0;
  z-index: 15;
  position: fixed;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-question{
      display: flex;
      align-items: center;
      gap:20px;
    }
    &-phone{
      font-size: adpval(14, 17, 1180, 700);
      font-style: normal;
      font-weight: 500;
      color:$white;
    }
    &-nav {
      display: flex;
      align-items: center;
      gap: 50px;
    }
  }
}

@media (width >= 700px) {
  .header {
    &__burger-button {
      display: none;
    }
  }
}

@media (width < 700px) {
  .header {
    &__nav {
      display: none;
    }

    &__burger-button {
      display: block;
      z-index: 6;
    }
  }
}
</style>
