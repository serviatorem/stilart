<script setup lang="ts">
import { services } from '~/state'
import BaseButton from '~/components/base/BaseButton.vue'
import FormProject from '~/components/form/FormProject.vue'
const serviceOther = services
</script>

<template>
  <div class="serviceAll">
    <div class="serviceAll__content container">
      <h2 class="serviceAll__title h2">
        Заголовок
      </h2>
      <div class="serviceAll__item">
        <div class="serviceAll__item__title">
          <h3 class="h3">
            {{ serviceOther[2].title }}
          </h3>
          <BaseButton type="flat">
            <NuxtLink to="/service/3">
              Подробнее
            </NuxtLink>
          </BaseButton>
        </div>
        <div class="serviceAll__item__description">
          <p
            v-for="service in serviceOther[2].description"
            :key="service.id"
            class="serviceAll__item__description__item"
          >
            {{ service.briefly }}
          </p>
        </div>
      </div>
      <div class="serviceAll__item">
        <div class="serviceAll__item__title">
          <h3 class="h3">
            {{ serviceOther[1].title }}
          </h3>
          <BaseButton type="flat">
            <NuxtLink to="/service/2">
              Подробнее
            </NuxtLink>
          </BaseButton>
        </div>
        <div class="serviceAll__item__description">
          <p
            v-for="service in serviceOther[1].description"
            :key="service.id"
            class="serviceAll__item__description__item"
          >
            {{ service.briefly }}
          </p>
        </div>
      </div>
      <div class="serviceAll__item">
        <div class="serviceAll__item__title">
          <h3 class="h3">
            Что ещё?
          </h3>
        </div>
        <div class="serviceAll__item__description">
          <p
            v-for="service in serviceOther[0].description"
            :key="service.id"
            class="serviceAll__item__description__item"
          >
            {{ service.briefly }}
          </p>
        </div>
      </div>
      <div class="serviceAll__form">
        <FormProject />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .serviceAll{
    &__title{
      align-self: flex-start;
    }
    &__form{
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0 0 / cover, url("public/images/bg/opening2.jpg") center center no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
    }
    &__content{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 0;
      gap:30px;
    }
    &__item{
      display: grid;
      grid-template-columns: 30% 1fr;
      gap:50px;
      width: 100%;
      &__description{
        font-size: adpval(16,20);
        display: flex;
        gap: 15px;
        flex-direction: column;
        padding-top: 15px;
      }
    }
  }
  @media screen and (max-width: 950px){
    .serviceAll{
      &__item{
        grid-template-columns: 1fr;
        gap:0;
        &__title{
          display: flex;
          gap:adpval(0,30px);
          align-items: center;
        }
      }
    }
  }
</style>
