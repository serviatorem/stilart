<script setup lang="ts">
import SectionContacts from '~/components/section/the-footer/SectionContacts.vue'
</script>

<template>
  <footer class="footer w">
    <SectionContacts class="footer__contacts" />
  </footer>
</template>

<style scoped lang="scss">
.footer {

  &__content {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
  }
}

@media (width < 500px) {
  .footer {
    &__content {
      flex-direction: column;
      align-items: start;
    }
  }
}
</style>
