<script setup lang="ts">

import { IBenefits } from '~/interfaces/IBenefits'

const benefits: IBenefits[] = [
  {
    id: 1,
    name: '20+',
    description: 'лет опыта'
  },
  {
    id: 2,
    name: '100%',
    description: 'экономия времени'
  },
  {
    id: 3,
    name: 'от дизайна',
    description: 'до реализации'
  }
]
</script>

<template>
  <div class="benefits">
    <div class="benefits__content">
      <div v-for="benefit in benefits" :key="benefit.id" class="benefits__content-item content__item">
        <h3 class="h2 content__item-title">{{benefit.name}}</h3>
        <p class="content__item-description">{{benefit.description}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .benefits{
    &__content{
      display: flex;
      align-items: center;
      gap:50px;
    }
    &-item{
      display: flex;
      flex-direction: column;
    }
  }
  .content__item{
    &-title{
      font-size: adpval(30, 32);
      text-transform: lowercase;
    }
    &-description{
      font-size: adpval(20, 24);
    }
  }
  @media screen and (max-width: 600px) {
    .benefits__content{
      gap:10px 50px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
