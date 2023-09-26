<script setup lang="ts">
// TODO: gen
import BaseButton from '~/components/base/BaseButton.vue'
import BaseLine from '~/components/base/BaseLine.vue'
</script>

<template>
  <section id="about" class="about w">
    <div class="container about__content">
      <div class="about__items">
        <div class="about__items__images item__images">
          <div class="item__images-wrapper">
            <img src="/images/projects/projects1.png" alt="image" class="item__images__image">
          </div>
          <div class="item__images-wrapper">
            <img src="/images/projects/projects1.png" alt="image" class="item__images__image">
          </div>
          <div class="item__images-wrapper">
            <img src="/images/projects/projects1.png" alt="image" class="item__images__image">
          </div>
        </div>
        <div class="about__items__images-mob item__images-mob">
          <Swiper
            :modules="[SwiperAutoplay]"
            :slides-per-view="1"
            :loop="true"
            :space-between="'20px'"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide class="item__images-wrapper">
              <img src="/images/projects/projects1.png" alt="image" class="item__images__image">
            </SwiperSlide>
            <SwiperSlide class="item__images-wrapper">
              <img src="/images/projects/projects1.png" alt="image" class="item__images__image">
            </SwiperSlide>
            <SwiperSlide class="item__images-wrapper">
              <img src="/images/projects/projects1.png" alt="image" class="item__images__image">
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="about__items__text item__text">
          <h2 class="about__title">
            О StilArt
          </h2>
          <p class="item__text-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <BaseButton class="about__link" type="transparent" to="/about">
            Читать подробнее
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;
  background: $d-tree;
  &__title {
    font-size: adpval(28, 36);
    font-style: normal;
    font-weight: 500;
    line-height: 52.2px;
    letter-spacing: 2.52px;
    text-transform: uppercase;
  }

  &__content {
    z-index: 1;
  }

  &__items {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: adpval(10,50);
  }

  &__link {
    margin: 30px 0;
  }
}
.item{
  &__images{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:30px;
    &-mob{
      display: none;
    }
    &-wrapper{
      &:nth-child(1){
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
  //&__text{
  //  &-description{
  //  }
  //}
}
@media screen and (max-width: 1250px){
  .about{
    &__link{
      margin:10px 0 0 0;
    }
  }
  .item{
    &__images{
      gap:50px;
      &__image{
        max-width: 350px;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .about{
    &__items{
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
    }
    &__link{
      margin: 10px auto 0;
    }
  }
  .item{
    &__text{
      text-align: center;
    }
    &__images{
      display: none;
      &-mob{
        display: block;
        max-width: 350px;
      }
    }
  }
}
@media screen and (max-width: 400px){
  .item{
    &__images{
      &-mob,&__image{
        max-width: 250px;
      }
    }
  }
}
</style>
