<script setup lang="ts">
const doArray = [
  {
    id: 1,
    title: 'Что мы делаем?',
    description: 'Ремонт под ключ «ЗАХОДИ И ЖИВИ»'
  },
  {
    id: 2,
    title: 'Как мы это делаем?',
    description: 'Процессы в единой системе, прозрачная схема отчетности для клиента.'
  },
  {
    id: 3,
    title: 'Во что мы верим?',
    description: 'Искусство уюта создается с любовью.'
  },
  {
    id: 4,
    title: 'За что мы стоим?',
    description: 'Создаем место, где человек может быть собой!'
  }
]
</script>

<template>
  <div class="do">
    <div class="container do__content">
      <div v-for="doItem in doArray" :key="doItem.id" class="do__content__text">
        <h3 class="h3 do__content__title">
          {{ doItem.title }}
        </h3>
        <p class="do__content__description">
          {{ doItem.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.do{
  &__content{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:30px;
    &__description{
      font-size: adpval(18,24);
    }
  }
}
@media screen and (max-width: 700px){
  .do{
    &__content{
      grid-template-columns: 1fr;
    }
  }
}
</style>
