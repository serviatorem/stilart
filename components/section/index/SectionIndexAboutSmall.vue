<script setup lang="ts">
// TODO: gen
import BaseLine from '~/components/base/BaseLine.vue'
</script>

<template>
  <section id="aboutSmall" class="about w">
    <div class="container about__content">
      <h1 class="about__content-phrase h2">
        Все начинается с идеи, и мы с вами будем на протяжении всего пути.
      </h1>
      <div class="about__items">
        <div class="about__item about-item">
          <div class="about-item__info">
            <h3 class="about-item__title">
              Заходи и живи!
            </h3>
            <div class="about-item__description">
              Наша команда профессионалов работает в концепции "Под ключ" от
              дизайн-проекта до реализации, заходи и живи! Данный подход
              включает в себя спектр услуг дизайн-проект, отделочные работы,
              закупка и разработка мебели, декорирование, авторский контроль и
              т.д.<br>Свяжитесь с нами сегодня, чтобы узнать больше.
            </div>
          </div>
          <img
            src="/images/aboutSmall/aboutSmallOne.jpg"
            alt="aboutSmallOne"
            class="about-item__image"
          >
        </div>
        <div class="about__item about-item">
          <div class="about-item__info">
            <h3 class="about-item__title">
              От дизайна до реализации.
            </h3>
            <div class="about-item__description">
              От дизайна до реализации, на рынке более 20 лет.Все что вы задумали, мы хотим реализовать. Для тех, кто ценит свое время, нервы и деньги!Вы решаете, что будет наилучшим результатом. Не навязываем стили и тренды, идем от пожеланий клиента.
            </div>
          </div>
          <img
            src="/images/aboutSmall/aboutSmallTwo.jpg"
            alt="aboutSmallTwo"
            class="about-item__image"
          >
        </div>
      </div>
    </div>
    <BaseLine color="wood" width="45%" bottom="42.5%" />
    <BaseLine color="wood" width="50%" top="12%" right="0" />
    <BaseLine color="wood" width="85%" bottom="0" right="0" />
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;

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
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap:20px;
  }

  &__items {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  &__link {
    margin: 30px auto 0;
  }
}

.about-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &__title {
    font-size: adpval(24, 32);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  &__description {
    margin-top: 15px;
    font-size: adpval(18, 24, 1180, 700);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__image {
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
    width: adpval(300, 480, 1180, 700);
  }
}

@media (width < 700px) {
  .about-item {
    flex-direction: column;

    &:nth-child(2n) {
      flex-direction: column;
    }

    &__image {
      width: 100%;
    }
  }
}
</style>
