<script setup lang="ts">
import { IAdvantages } from '~/interfaces/IAdvantages'

const advantages: IAdvantages[] = [
  {
    id: 1,
    title: 'Экологичность',
    description: 'Студия СтилАрт серьезно относится к подходу полного цикла работ, но при этом обязательно четкое определение результата. Шансы достигнуть желаемое увеличиваются, когда цель имеет точное описание. Описанием результата является дизайн проект.'
  },
  {
    id: 2,
    title: 'Экологичность',
    description: 'Берем на себя обязательства по управлению и организации ремонта все включено «ЗАХОДИ и ЖИВИ». Студия СтилАрт работает на результат. Вы получаете услугу реализации, не думаете о том, как найти подрядчиков. Звоните, остальное мы организуем!'
  },
  {
    id: 3,
    title: 'Экологичность',
    description: 'Если предстоит ремонт вашего жилища, а время своей жизни вам дороже чем пустые разговоры и выяснения отношений кто прав, и кто виноват, в таком случае недостаточно понимать стоимость ремонта!\n'
  },
  {
    id: 4,
    title: 'Экологичность',
    description: 'Сейчас есть возможность создавать в помещении любые идеи. Нафантазировать и предложить можно достаточно отделки и сочетаний. Предлагая варианты оформления интерьера, необходимо четко понимать сколько клиент может потратить на ремонт, закупку мебели, материалов и пр… Иначе потом может оказаться, что картинка так и останется картинкой.'
  },
  {
    id: 5,
    title: 'Вам важно время своей жизни?',
    description: 'Экономим до 100% вашего времени! Что еще может быть настолько выгодным, как вложение в себя, в свой комфорт, в свою семью, в свой дом освобождая себя от рутины?'
  }
]
</script>

<template>
  <section class="container advantages">
    <h2 class="advantages__title h2">
      StilArt это:
    </h2>
    <div class="advantages__content">
      <div v-for="advantage in advantages" :key="advantage.id" class="advantages__content-item content__item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="akar-icons:check">
            <path
              id="Vector"
              d="M4 12L10 18L20 6"
              stroke="#4e3629"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <p class="content__item-description">
          {{ advantage.description }}
        </p>
      </div>
    </div>
    <div class="advantages__content advantages__content__mob">
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
        <SwiperSlide v-for="advantage in advantages" :key="advantage.id" class="advantages__content-item content__item">
          <p class="content__item-description">
            {{ advantage.description }}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
.advantages {
  display: flex;
  flex-direction: column;
  gap: 50px;

  &__content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
    &__mob{
      display: none;
    }
  }
}

.content__item {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  align-items: center;
  &-description{
    grid-column-start: 2;
    font-size: adpval(16,20);
  }
  //&:nth-child(4), &:nth-child(5), &:nth-child(6) {
  //  grid-row-start: 2;
  //}
  //
  //&:nth-child(4) {
  //  grid-column-start: 2;
  //}
  //
  //&:nth-child(5) {
  //  grid-row-start: 2;
  //  grid-column-start: 3;
  //}
  //
  //&:nth-child(6) {
  //  grid-row-start: 2;
  //  grid-column-start: 4;
  //}
}
@media screen and (max-width: 850px) {
  //.advantages{
  //  &__content{
  //    grid-template-columns: 1fr 1fr 1fr;
  //  }
  //}
  .content__item {
    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      grid-row-start: auto;
      grid-column-start: auto;
    }
  }
}
//@media screen and (max-width: 600px){
//  .advantages{
//    &__content{
//      grid-template-columns: 1fr 1fr;
//      gap:10px;
//    }
//  }
//}
@media screen and (max-width: 350px){
  .advantages{
    &__content{
      display: none;
      &__mob{
        display: block;
        max-width: 310px;
        margin: 0 auto;
      }
    }
  }
  .content__item{
    grid-template-columns: 1fr;
    &-description{
      grid-column-start: 1  ;
    }
  }
}
</style>
