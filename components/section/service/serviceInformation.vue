<script setup lang="ts">
import FormProject from '~/components/form/FormProject.vue'
import { services } from '~/state'

// const serviceInformation = [
//   {
//     id: 2,
//     title: 'Инженерные работы',
//     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
//   },
//   {
//     id: 3,
//     title: 'Отделочные работы',
//     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
//   },
//   {
//     id: 4,
//     title: 'Закупка всех материалов',
//     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
//   },
//   {
//     id: 5,
//     title: 'Технический надзор',
//     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
//   }
// ]
</script>

<template>
  <div class="serviceInformation__wrapper">
    <div class="serviceInformation container">
      <h2 class="serviceInformation__title h2">
        Что включает в себя ремонт?
      </h2>
      <div
        v-for="serviceItem in services[1].description"
        :key="serviceItem.id"
        class="serviceInformation__item"
      >
        <h3 class="serviceInformation__item__title h3">
          {{ serviceItem.briefly }}
        </h3>
        <p class="serviceInformation__item__description">
          {{ serviceItem.full }}
        </p>
      </div>
      <div class="serviceInformation__form">
        <FormProject />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .serviceInformation{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    gap:30px;
    &__wrapper{
      background: $d-tree;
    }
    &__form{
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0 0 / cover, url("public/images/bg/opening2.jpg") center center no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      padding: adpval(30,50) 0;
    }
    &__item{
      display: flex;
      flex-direction: column;
      gap:15px;
      border:2px solid $tree;
      border-radius: 4px;
      padding: 10px;
      &__title{
        border-bottom: 2px solid $tree;
      }
      &__description{
        font-size: adpval(16,20);
      }
    }
  }
  @media screen and (max-width: 360px){
    .serviceInformation{
      padding: 30px 10px;
    }
  }
</style>
