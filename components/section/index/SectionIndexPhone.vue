<script setup lang="ts">

</script>

<template>
  <section class="container phone">
    <h2 class="phone__title h2">
      Полная прозрачность и доверие!
    </h2>
    <div class="phone__content">
      <div class="phone__content__text-wrapper">
        <p class="phone__content__text">
          Под каждый проект мы создаём отдельный чат в мессенджере, где вы сможете следить за ходом выполнения работ, получать отчёты и согласовывать вопросы.
        </p>
      </div>
      <div class="phone__content__img-wrapper">
        <img src="/images/phone/phone.png" alt="phone" class="phone__content__img">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .phone{
    &__content{
      margin: adpval(20,40) 0;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      gap:50px;
      &__text{
        font-size: adpval(14, 24);
      }
      &__img{
        width: 100%;
        aspect-ratio: 2/1;
        transform: rotate(180deg);
        &-wrapper{
          max-width: 400px;

        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .phone{
      &__content{
        position: relative;
        grid-template-columns: 1fr;
        &__text{
          &-wrapper{
            position: absolute;
            z-index: 2;
            padding: 0 50px;
          }
        }
        &__img{
          &-wrapper{
            max-width: none;
          }
        }
      }
    }
  }
</style>
