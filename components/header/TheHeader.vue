<script setup lang="ts">
import BaseNavigation from '~/components/base/BaseNavigation.vue'
import TheOpening from '~/components/section/the-header/SectionOpening.vue'
import BaseBurger from '~/components/base/BaseBurger.vue'
import BaseMenu from '~/components/base/BaseMenu.vue'
import TransitionOpacity from '~/components/transition/TransitionOpacity.vue'
import { onMounted } from '#imports'
import TransitionOpacitySemi from '~/components/transition/TransitionOpacitySemi.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import BaseModal from '~/components/base/BaseModal.vue'
import ModalWrapper from '~/components/modal/ModalWrapper.vue'
import OpacityTransition from '~/components/transition/OpacityTransition.vue'

const images = ref([
  {
    id: 1,
    url: '/images/bg/opening1.jpg'
  },
  {
    id: 2,
    url: '/images/bg/opening2.jpg'
  },
  {
    id: 3,
    url: '/images/bg/opening3.jpg'
  },
  {
    id: 4,
    url: '/images/bg/opening4.jpg'
  },
  {
    id: 5,
    url: '/images/bg/opening5.jpg'
  },
  {
    id: 6,
    url: '/images/bg/opening6.jpg'
  },
  {
    id: 7,
    url: '/images/bg/opening7.jpg'
  }
])
const currentImage = ref<string>(images.value.at(-1)!.url as string)
const isBurgerOpen = ref<boolean>(false)
const modalVision = ref<boolean>(false)

interface imagesIndexIterator extends Generator<number, number, number> {
}

function * imagesIndexGenerator (): imagesIndexIterator {
  yield 0
  yield 1
  return 2
}

onMounted(() => {
  let imagesIndex = imagesIndexGenerator()
  setInterval(() => {
    const imageIndex = imagesIndex.next()
    currentImage.value = images.value[imageIndex.value]!.url as string
    if (imageIndex.done) {
      imagesIndex = imagesIndexGenerator()
    }
  }, 6000)
})

function changeBurgerVisibility () {
  isBurgerOpen.value = !isBurgerOpen.value
}

</script>

<template>
  <div
    class="header-wrapper w"
  >
    <TransitionOpacitySemi>
      <div
        :key="currentImage"
        class="header__bg"
        :style="`
                background: url(${currentImage}) no-repeat;
                filter:brightness(0.65);
                background-size: cover;
                background-position: center`"
      />
    </TransitionOpacitySemi>
    <header class="header w">
      <div class="container-bg header__content">
        <div class="header__content-nav">
          <NuxtLink to="/">
            <img src="/images/logo/logoW.svg" alt="logo" class="header__logo">
          </NuxtLink>
          <BaseNavigation style="color: black" class="header__nav" />
        </div>
        <div class="header__content-question">
          <a href="tel:+7(915)774-64-30" class="header__content-phone">
            +7(915)774-64-30
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
    <TheOpening />
  </div>
</template>

<style scoped lang="scss">
.header__bg {
  //background: linear-gradient($trnsp-d-tree, $trnsp-d-tree),
  //url("/images/bg/opening.png") no-repeat;
  animation: 1s bg linear alternate infinite;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.header-wrapper {
  position: relative;
  //margin-bottom: adpval(80, 120);
}

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

@media (width >= 900px) {
  .header {
    &__burger-button {
      display: none;
    }
  }
}

@media (width < 900px) {
  .header {
    &__nav {
      display: none;
    }
    &__content-question{
      display: none;
    }
    &__burger-button {
      display: block;
      z-index: 6;
    }
  }
}
</style>
