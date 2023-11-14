<script setup lang="ts">
import BaseLine from '~/components/base/BaseLine.vue'
</script>

<template>
  <div id="contacts" class="contacts">
    <div class="container contacts__content">
      <h2 class="h2 contacts__title">
        Контакты
      </h2>
      <div class="contacts__dual">
        <div class="contacts__info">
          <div class="contacts__section">
            <h3 class="h3 contacts__subtitle">
              Юридическая информация
            </h3>
            <div class="contacts__items">
              <p class="contacts__item">
                ООО "СтилАрт"
              </p>
              <p class="contacts__item">
                ИНН 7721526843
              </p>
              <p class="contacts__item">
                ОГРНИП 321774600705557
              </p>
              <p class="contacts__item">
                Телефон +7(915)774-64-30
              </p>
              <p class="contacts__item">
                г. Москва
              </p>
              <p class="contacts__item">
                БИК 044525225
              </p>
            </div>
          </div>
          <div class="contacts__section">
            <h3 class="h3 contacts__subtitle">
              Соц. Сети
            </h3>
            <div class="contacts__items contacts__items_horizontal">
              <p class="contacts__item">
                <a href="#">Instagram</a>
              </p>
              <p class="contacts__item">
                <a href="#">Telegram</a>
              </p>
              <p class="contacts__item">
                <a href="#">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
        class="contacts__map"
        src="public/images/footer/footer.jpg"
        alt="map"
    >
    <BaseLine color="white" top="20%" width="100%" />
    <BaseLine color="white" bottom="11%" width="60%" />
  </div>
</template>

<style scoped lang="scss">
.contacts {
  position: relative;
  padding: 20px 0;
  background: $tree;
  color: $white;
  position: relative;
  &__content {
    z-index: 2;
  }

  &__dual {
    margin: 50px 0;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 25px;
  }

  &__info {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 505px;
  }

  &__items {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &_horizontal {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__item {
    font-size: adpval(20, 24, 1000);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__map {
    border-radius: 4px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    filter: brightness(65%);
    left: 0;
  }
}

@media (width < 1000px) {
  .contacts {
    &__dual {
      grid-template-columns: 1fr;
    }
  }
}
</style>
