<script setup lang="ts">
import FormOpening from '~/components/form/FormOpening.vue'
import BaseBenefits from '~/components/base/BaseBenefits.vue'
</script>

<template>
  <section class="opening w">
    <div class="container opening__content">
      <div class="opening__left">
        <div class="opening__left-titles">
          <h1 class="opening__title">
            Создаем интерьеры, где вы будете собой!
          </h1>
          <h2 class="opening__title">
            Можно просто расслабиться и быть настоящим.
          </h2>
        </div>
        <BaseBenefits/>
      </div>
      <div class="opening__right">
        <FormOpening />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.opening {
  position: relative;
  color: $white;
  overflow: hidden;

  &__content {
    position: relative;
    padding: 200px 0;
    display: grid;
    grid-template-columns: 65% 35%;
    gap: adpval(14, 40);
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-titles{
      display: flex;
      flex-direction: column;
      gap:20px;
    }
  }

  &__glasses {
    position: relative;
  }

  &__glass {
    position: absolute;

    &_1 {
      bottom: 150px;
      left: 30px;
    }

    &_2 {
      left: adpval(50, 330);
      bottom: 20px;
    }

    &_3 {
      left: 120px;
      top: 50px;
    }

    &_4 {
      right: -300px;
      top: 90px;
    }
  }

  &__title {
    max-width: 690px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    letter-spacing: 2.52px;
    text-transform: uppercase;
    &:first-child{
      font-size: adpval(30, 40);
    }
    &:last-child{
      font-size: adpval(26, 34);
    }
  }
}

@media (width >= 1050px) {
  .opening__glasses_mob {
    display: none;
  }
}

@media (width < 1050px) {
  .opening {
    &__content {
      grid-template-columns: 1fr;
    }

    &__right {
      margin: 0 auto;
      width: min(600px, 100%);
    }

    &__glasses {
      &_pc {
        display: none;
      }

      &_mob {
        display: flex;
        align-items: center;
      }
    }

    &__glass {
      position: static;
    }
  }
}
@media (width < 900px){
  .opening{
    margin: 30px 0 0 0;
  }
}
@media (width < 500px) {
  .opening {
    &__left{
      gap:30px 0;
    }
    &__glasses {
      display: none;
    }
  }
}
</style>
