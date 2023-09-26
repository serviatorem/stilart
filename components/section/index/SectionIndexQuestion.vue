<script setup lang="ts">

</script>

<template>
  <div class="question">
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
  </div>
</template>

<style scoped lang="scss">
  .question{
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
  }
</style>
