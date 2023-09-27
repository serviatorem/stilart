<script setup lang="ts">
import { IService } from '~/interfaces/IService'
import FormProject from '~/components/form/FormProject.vue'

const props = defineProps<{
  service:IService
}>()
// eslint-disable-next-line vue/no-setup-props-destructure
const service = props.service
</script>

<template>
  <div class="servicePackage-wrapper">
    <div class="servicePackage container">
      <h2 class="servicePackage__title h2">
        Дизайн-проект
      </h2>
      <div class="servicePackage__content">
        <div
          v-for="serviceDescription in service.description"
          :key="serviceDescription.id"
          class="servicePackage__item"
        >
          <h3 class="h3 servicePackage__item__title">
            {{ serviceDescription.briefly }}
          </h3>
          <div
            v-for="fullDescription in serviceDescription.full"
            class="servicePackage__item__description-wrapper"
          >
            <p class="servicePackage__item__description">
              {{ fullDescription }}
            </p>
          </div>
        </div>
      </div>
      <div class="servicePackage__form">
        <FormProject />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .servicePackage{
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap:20px;
    &__form{
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0 0 / cover, url("public/images/bg/opening2.jpg") center center no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
    }
    &-wrapper{
      background: $d-tree;
    }
    &__content{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap:30px;
    }
    &__item{
      background: $tree;
      color:white;
      display: flex;
      flex-direction: column;
      gap:10px;
      border-radius: 4px;
      padding: 20px;
      &:nth-child(1){
        grid-row-start: 1;
        grid-row-end: 3;
      }
      &:nth-child(2),&:nth-child(3){
        grid-column-start: 2;
        grid-column-end: 5;
      }
      &:nth-child(4){
        grid-column-start: 1;
        grid-column-end: 3;
      }
      &:nth-child(5){
        grid-column-start: 3;
        grid-column-end: 5;
      }
      &__title{
        font-size: adpval(22,26);
      }
    }
  }
  @media screen and (max-width: 800px){
    .servicePackage{
      &__content{
        grid-template-columns: 1fr;
      }
      &__item{
        border-radius: 0;
        &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4),&:nth-child(5){
          grid-column: auto;
          grid-row: auto;
        }
      }
    }
  }
</style>
