<script setup lang="ts">

import { services } from '~/state'
</script>

<template>
  <section id="services" class="services">
    <div class="container services__content">
      <h2 class="h2 services__title">
        Услуги
      </h2>
      <div class="services__cards">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`service/${service.id}`"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          class="service__card service-card"
        >
          <img
            :src="`/images/services/${service.img}`"
            alt="service"
            class="service-card__image"
          >
          <div class="service-card__front">
            <h3 class="h3 service-card__title">
              {{ service.title }}
            </h3>
          </div>
          <div class="service-card__back">
            <p class="service-card__more">
              Подробнее
            </p>
          </div>
          <ul class="service-card__description">
            <li v-for="serviceDescription in service.description" :key="serviceDescription.id" class="description__list">
              {{ serviceDescription.briefly }}
            </li>
          </ul>
        </NuxtLink>
      </div>
      <div class="services__cards services__cards_mob">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :loop="true"
          :space-between="'20px'"
        >
          <SwiperSlide
            v-for="service in services"
            :key="service.id"
          >
            <NuxtLink
              :to="`service/${service.id}`"
              class="service__card service-card"
            >
              <div class="service__card-image__wrapper">
                <img
                  :src="`/images/services/${service.img}`"
                  alt="service"
                  class="service-card__image"
                >
              </div>
              <div class="service-card__front">
                <h3 class="h3 service-card__title">
                  {{ service.title }}
                </h3>
              </div>
              <div class="service-card__back">
                <p class="service-card__more">
                  Подробнее
                </p>
              </div>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  position: relative;
  width: 100%;
  //margin-top: -120px;
  padding: adpval(30, 110) 0;
  background: $d-tree;
  color: $white;
  &__title{
    text-align: center;
    color:$black;
  }
  &__content {
    z-index: 1;
  }

  &__cards {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}

.service-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  max-width: 380px;
  &:nth-child(2),&:nth-child(4){
    justify-self: end;
  }
  &__title {
    position: absolute;
    font-size: adpval(22, 32);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    text-align: center;
  }

  &__image {
    width: 100%;
    filter: brightness(0.65);
    object-fit: cover;
    border: 2px solid white;
  }
  &__back {
    opacity: 0;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }

  &:hover > &__back {
    opacity: 1;
  }

  &:hover > &__description {
    opacity: 1;

  }
  &:nth-child(4){
    align-items: center;
    justify-content: flex-start;
    max-width: fit-content;
    display: grid;
    grid-template-columns: 35% 63.5%;
    .service-card__description{
      gap:10px;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      align-items: center;
      width: 100%;
      max-width: 1200px;
    }
    .service-card__front{
      width: fit-content;
      left: 18%;
      top:0;
    }
    .service-card__back{
      width: 35%;
    }
  }
  &__front {
    width: 100%;
    height: 100%;
    top:-20%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;
  }
  &__description {
    text-align: center;
    padding:10px 0 70px 0;
    font-size: adpval(16, 21);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: $tree;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(0);
  }

  &__more {
    position: absolute;
    width: 100%;
    bottom: 0;
    font-size: adpval(16, 22);
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color:$black;
    background-color: $d-tree;
    border: 2px solid $tree;
    padding: adpval(10, 15) 0;
  }
}
.service__card-image__wrapper{
  border:2px solid white;
}
@media screen and (max-width: 1690px){
  .services {
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .service-card:nth-child(4){
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;
    max-width: 380px;
    .service-card__front{
      width: 100%;
      left: 0;
    }
    .service-card__back{
      width: 100%;
    }
    .service-card__description{
      display: flex;
      gap:0;
      flex-direction: column;
    }
    .service-card__front{
      top:-20%;
    }
  }
}
@media (width < 1180px) {
  .services{
    //margin-top: -110px;
  }
  .services__title {
    text-align: center;
  }
  .service-card__back{
    opacity: 1;
  }
  .services__cards {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}

@media (width < 630px) {
  .services__cards {
    display: none;
  }
  .services{
    //margin-top: -91px;
  }
}

@media (width >= 630px) {
  .services__cards_mob {
    display: none;
  }
}

@media (width < 630px) {
  .service__card-image__wrapper{
    border: none;
  }
  .services__cards_mob {
    display: block;
    max-width: 376px;
    margin: 0 auto;
  }
  .service-card__front{
    top:0;
  }
  .service-card__more{
    background: $tree;
    color:$white;
    width: 99%;
  }
}

</style>
