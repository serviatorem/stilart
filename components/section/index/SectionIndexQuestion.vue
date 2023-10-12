<script setup lang="ts">

</script>

<template>
  <section class="question">
    <div class="container question__content">
      <h2 class="question__content__title h3">
        Вы уже делали ремонт самостоятельно?
      </h2>
      <p class="question__content__description">
        Заказали дизайн у фрилансера за копейки или вообще начали ремонт без каких-либо идей… <br>
        Для начала искали строителей подешевле… <br>
        Ругались с рабочими, долго ходили по магазинам в муках выбора… <br>
        Тратили кучу времени на ожидание доставок и приемку товара… <br>
        Занимались возвратом или рекламацией… <br>
        Сравнивали цены на мебель, искали варианты исполнителей… <br>
        И если вам понравилось, то вам не стоит обращаться к нам!
      </p>
    </div>
    <div class="question__footer container">
      <h2 class="question__footer__title h3">
        Вы уже делали ремонт самостоятельно - сделай больше
      </h2>
      <p class="question__footer__description">
        Если вам необходимо делегировать всю боль стройки и получить радость от результата-пишите, звоните или оставьте заявку, мы с вами свяжемся.
      </p>
      <p class="question__footer__description motto">Мы верим, что каждый профессионал должен заниматься своим делом!</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .question{
    display: grid;
    grid-template-columns: 1fr;
    gap:50px;
    &__content{
      display: grid;
      grid-template-columns: 1fr;
      gap:30px;
      &__description{
        font-style: normal;
        font-weight: 500;
        line-height: 145%;
        font-size: adpval(18,24);
      }
    }
    &__footer{
      display: grid;
      grid-template-columns: 1fr;
      gap:30px;
      &__description{
        font-style: normal;
        font-weight: 500;
        line-height: 145%;
        font-size: adpval(22,28);
      }
      .motto{
        text-align: center;
        font-weight: bold;
      }
    }
  }
</style>
