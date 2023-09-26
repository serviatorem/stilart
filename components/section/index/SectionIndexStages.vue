<script setup lang="ts">
const cardUnits = ref([
  {
    id: 1,
    title: 'ПЛАНИРОВАНИЕ БЮДЖЕТА!',
    description: 'Связываетесь с нами любым удобным для вас способом, звоните, пишите. Обсуждаем все пожелания, задаем важные уточнения. Спустя 2-3 дня направляем вам готовый просчет полной стоимости затрат на реализацию.Чтобы был гарантированный результат, важно понимать общий бюджет затрат!Мы предлагаем для начала сотрудничества определить бюджет, чтобы реализация проекта пришла к нужному результату.',
    isActive: false
  },
  {
    id: 2,
    title: 'ДИЗАЙН-ПРОЕКТ!',
    description: `
                Это инструкция к интерьеру мечты. Для начала работ по дизайн проекту важно произвести замеры помещения. Звоните и приглашайте нас на обмеры. На основе ваших пожеланий создаем интерьер для вас, с учетом привычек, хобби, особенностей характера, бытовых и повседневных дел, пространство - где удобно жить и можно просто быть собой! Для лучшего понимания у нас есть табличка с самыми важными позициями для обсуждения.`,
    isActive: false
  },
  {
    id: 3,
    title: 'РЕАЛИЗАЦИЯ!',
    description: 'Бюджет и дизайн проект у нас уже согласован, приступаем непосредственно к производству работ. Управление и организация ремонта Под Ключ «ЗАХОДИ и ЖИВИ». Сопровождение и организация процесса закупок, ремонтные работы, подбор и комплектация мебели, освещения, текстиль, цвет стен, декор стен, стулья, кресла, мягкая мебель, корпусная мебель, встроенная мебель, текстиль и комплектующие для оформления окна, техника, освещение, поиск и предоставление в форме списка закупок для согласования. Оформления договоров, счетов, авторского контроля, монтажа, доставки, приемки, сборки, установки, уборки, орг. вынос мусора.С регулярными отчетами по закупкам и фоотчеты в чате любого удобного мессенджера.По итогу вы заходите и наслаждаетесь новым жилищем!',
    isActive: false
  }
])

</script>

<template>
  <section id="stages" class="stages w">
    <div class="container-bg stages__content">
      <h2 class="h2 stages__title">
        Этапы работ
      </h2>
      <div class="stages__grid stages-grid w">
        <div class="stages-grid__cards">
          <div
            v-for="cardUnit in cardUnits"
            :key="cardUnit.id"
            :class="{'stages-grid__cards-unit_active': cardUnit.isActive}"
            class="stages-grid__cards-unit"
          >
            <div class="stages-grid__unit">
              <p class="stages-grid__number">
                {{ cardUnit.id }}
              </p>
            </div>
            <div class="stages-grid__card sg-card">
              <h3 class="sg-card__title">
                {{ cardUnit.title }}
              </h3>
              <p class="sg-card__description">
                {{ cardUnit.description }}
              </p>
            </div>
          </div>
        </div>
        <span class="stages-grid__line" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stages {
  &__grid {
    margin-top: 30px;
  }
}

.stages-grid {
  position: relative;
  display: flex;
  flex-direction: column;

  &__cards {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: adpval(20, 45, 1700, 900);
  }

  &__cards-unit {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &:hover{
      .sg-card, .stages-grid__number{
        color: white;
        background-color: $tree;
      }
    }
  }

  &__line {
    position: absolute;
    width: 71%;
    display: block;
    height: 2px;
    background-color: $black;
    top: 24px;
    z-index: -1;
  }

  &__number {
    width: 47px;
    height: 47px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 1px solid $black;
    font-size: 24px;
    font-weight: 500;
    z-index: 2;
    background-color: $white;
    transition: color .5s, background-color .5s;

    &_final {
      outline-color: $tree;
      background-color: $tree;
    }
  }
}

.sg-card {
  height: 100%;
  padding: adpval(10, 20, 1700, 900);
  border: 1px solid $black;
  border-radius: 4px;
  transition: color .5s, background-color .5s;
  //&:hover{
  //  color: white;
  //  background-color: $tree;
  //
  //}
  &__title {
    font-size: adpval(24, 32, 1700, 900);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__description {
    margin-top: 20px;
    font-size: adpval(16, 32, 1700, 900);
    font-weight: 500;
    line-height: 145%;
  }
}

@media (width < 900px) {
  .stages-grid {
    flex-direction: row-reverse;

    &__cards {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 40px;
    }

    &__cards-unit {
      gap: 30px;
      flex-direction: row-reverse;
    }

    &__line {
      position: absolute;
      height: 66%;
      width: 2px;
      display: block;
      background-color: $black;
      top: 0;
      right: 24px;
      z-index: -1;
    }
  }
}
</style>
