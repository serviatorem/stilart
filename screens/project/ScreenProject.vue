<script setup lang="ts">

import { IProject } from '~/interfaces/IProject'
import FormProject from '~/components/form/FormProject.vue'

const props = defineProps<{
  project:IProject
}>()
// eslint-disable-next-line vue/no-setup-props-destructure
const project = props.project
</script>

<template>
  <div class="projectPage-wrapper">
    <div class="container projectPage">
      <div class="projectPage__info">
        <div class="projectPage__info__title-wrapper">
          <h2 class="projectPage__info__title h2">
            О проекте
          </h2>
          <h3 class="projectPage__info__title-mini h3">
            {{ project.name }}
          </h3>
        </div>
        <div class="projectPage__info__description-wrapper">
          <p class="projectPage__info__description">
            <span>Год реализации</span> - {{ project.info.year }}
          </p>
          <p class="projectPage__info__description">
            <span>Площадь</span> - {{ project.info.square }}
          </p>
          <p class="projectPage__info__description">
            <span>Дизайнеры</span> - {{ project.info.designers }}
          </p>
          <p class="projectPage__info__description">
            <span>Декоратор</span> - {{ project.info.decorator }}
          </p>
          <p class="projectPage__info__description">
            <span>Фотограф</span> - {{ project.info.photograph }}
          </p>
          <p class="projectPage__info__description">
            <span>Количество комнат</span> - {{ project.info.countRoom }}
          </p>
          <p class="projectPage__info__description">
            <span>Срок реализации</span> - {{ project.info.term }}
          </p>
        </div>
      </div>
      <div class="projectPage__images">
        <div
          v-for="image in project.info.images"
          :key="project.id"
          class="projectPage__images__image-wrapper"
        >
          <img
            :src="'/images/projectPage/' + image"
            :alt="image"
            class="projectPage__images__image"
          >
        </div>
      </div>
      <div class="projectPage__form" :style="'background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + '/images/projectPage/'+ project.image + ') center no-repeat; background-size:cover;'">
        <h3 class="projectPage__form__title h3">
          Напишите нам!
        </h3>
        <FormProject />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .projectPage{
    display: flex;
    flex-direction: column;
    gap:40px;
    padding: adpval(20,50) 0;
    &-wrapper{
      background: $d-tree;
      margin: -30px 0;
    }
    &__info{
      display: grid;
      grid-template-columns: 1fr 1fr;
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
        object-fit: cover;
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
