<script setup lang="ts">
import FormProject from '~/components/form/FormProject.vue'
import ModalWrapper from '~/components/modal/ModalWrapper.vue'
import OpacityTransition from '~/components/transition/OpacityTransition.vue'

const props = defineProps<{
  project:any
}>()
// eslint-disable-next-line vue/no-setup-props-destructure
const project = props.project
const modalVision = ref<boolean>(false)
const imageModal = ref()
</script>

<template>
  <div class="projectPage-wrapper">
    <div class="container projectPage">
      <div class="projectPage__info">
        <div class="projectPage__info__title-wrapper">
          <h2 id="project" class="projectPage__info__title h2">
            {{ project.attributes.title }}
          </h2>
        </div>
      </div>
      <div class="projectPage__images">
        <div
          v-for="image in project.attributes.images.data"
          :key="image.id"
          class="projectPage__images__image-wrapper"
        >
          <img
            :src="`https://admin.stilart-design.ru${image.attributes.formats.large.url}`"
            :alt="image"
            class="projectPage__images__image"
            @click="imageModal = image.attributes.formats.large.url;modalVision = true"
          >
        </div>
      </div>
      <div class="projectPage__form" :style="'background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + 'https://admin.stilart-design.ru'+ project.attributes.images.data[0].attributes.formats.large.url + ') center no-repeat; background-size:cover;'">
        <h3 class="projectPage__form__title h3">
          Напишите нам!
        </h3>
        <FormProject />
      </div>
    </div>
    <Teleport to="body">
      <OpacityTransition>
        <ModalWrapper v-if="modalVision" @hide-modal="modalVision = false">
          <img
            :src="`https://admin.stilart-design.ru${imageModal}`"
            :alt="imageModal"
            class="projectPage__image__modal"
            @click="modalVision = false"
          >
        </ModalWrapper>
      </OpacityTransition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.projectPage{
  display: flex;
  flex-direction: column;
  gap:40px;
  padding: adpval(20,50) 0;
  &__image__modal{
    max-width: 80vw;
    max-height: 80vh;
    height: auto;
    cursor: pointer;
  }
  &-wrapper{
    background: $d-tree;
    margin: -30px 0;
  }
  &__info{
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap:10px;
    &__title{
      &-wrapper{
        display: flex;
        flex-direction: column;
        gap:30px;
      }
    }
    &__description{
      &-wrapper{
        display: flex;
        flex-direction: column;
        gap:10px;
      }
      font-weight: lighter;
      font-size: adpval(16,20);
      span{
        font-weight: 400;
      }
    }
  }
  &__images{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap:10px;
    &__image{
      width:100%;
      max-height: 215px;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  &__form{
    width: 100%;
    color: white;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
  }
}
@media screen and (max-width: 900px){
  .projectPage{
    &__images{
      grid-template-columns: repeat(3,1fr);
    }
  }
}
@media screen and (max-width: 600px){
  .projectPage{
    &__images{
      grid-template-columns: repeat(2,1fr);
    }
    &__info{
      grid-template-columns: 1fr;
      &__description{
        &-wrapper{
          align-items: center;
        }
      }
    }
  }
}
</style>
