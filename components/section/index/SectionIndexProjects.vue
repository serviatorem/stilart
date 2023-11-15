<script setup lang="ts">

import { useAPI } from '~/API'
import BaseButton from '~/components/base/BaseButton.vue'

const useAPIStore = useAPI()
const projects = await useAPIStore.getPortfolio()
</script>

<template>
  <section id="projects" class="projects w">
    <div class="container-lg projects__content">
      <h2 class="projects__title h2">
        Проекты
      </h2>
      <div class="projects__cards w projects__cards_6">
        <NuxtLink
          v-for="project in projects.data.slice(0,6)"
          :key="project.id"
          class="projects__card project-card w"
          :to="`/project/${project.id}`"
        >
          <img
            :src="`https://admin.stilart-design.ru${project.attributes.images.data[0].attributes.formats.large.url}`"
            alt="Проект компании StilArt"
            class="project-card__image w"
          >
          <div class="project-card__info">
            <h3 class="h2 project-card__title">
              {{ project.attributes.title }}
            </h3>
            <p>Подробнее</p>
          </div>
        </NuxtLink>
      </div>
      <BaseButton type="transparent"><NuxtLink to="/projects">Больше работ</NuxtLink></BaseButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  &__cards {
    display: grid;
    min-height: 1080px;
    max-height: 1080px;
    &_6 {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}

.project-card {
  min-height: 350px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__image {
    position: absolute;
    object-fit: cover;
    height: 100%;
    transition: 0.2s ease;
  }

  &:hover &__image {
    scale: 1.05;
    filter: brightness(0.7);
  }

  &:hover &__info {
    opacity: 1;
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    z-index: 3;
    color: white;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
}

@media (width < 800px) {
  .projects {
    &__cards {
      &_6 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        max-height: none;
      }
    }
  }
  .project-card {
    &__image {
      filter: brightness(0.7);
    }

    &__info {
      opacity: 1;
    }
  }
}

@media (width < 580px) {
  .projects {
    &__cards {
      &_6 {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
    }
  }
}
</style>
