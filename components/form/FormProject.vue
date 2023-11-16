<script setup lang="ts">
import {ref} from 'vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseCheckbox from '~/components/base/BaseCheckbox.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import {useAPI} from "../../API";

const buttonText = ref<
    | 'Отправить'
    | 'Ошибка. Попробуйте позже'
    | 'Успешно отправлено'
    | 'Идёт отправка...'
    | 'Не всё заполненно!'
>('Отправить')

const form = ref<HTMLInputElement | null>(null)
const nameF = ref<string>('')
const mailF = ref<string>('')
const phoneF = ref<string>('')
const checkboxF = ref<boolean>(false)

async function goMail() {
  if (!form.value) {
    return
  }

  if (form.value.checkValidity()) {
    buttonText.value = 'Идёт отправка...'
    try {
      const data = {
        data: {
          name: nameF.value,
          email: mailF.value,
          phone: phoneF.value
        }
      }
      await useAPI().postPortfolio(nameF.value, emailF.value, phoneF.value)
      buttonText.value = 'Успешно отправлено'
    } catch (e) {
      buttonText.value = 'Ошибка. Попробуйте позже'
    }
  } else {
    buttonText.value = 'Не всё заполненно!'
    setTimeout(() => {
      buttonText.value = 'Отправить'
    }, 3000)
    form.value.reportValidity()
  }
}
</script>

<template>
  <div class="form__wrapper">
    <form ref="form" class="form-project w">
      <p class="form-project__title">
        Оставьте заявку
      </p>
      <BaseInput
        v-model="nameF"
        required
        label-text="Имя"
        placeholder="Тихон"
        type="text"
      />
      <BaseInput
        v-model="mailF"
        required
        label-text="Электронная почта"
        placeholder="example@mail.ru"
        type="email"
      />
      <BaseInput
        v-model="phoneF"
        v-maska
        data-maska="+7 (###) ###-##-##"
        required
        pattern="^(?:\+7\s)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$"
        label-text="Номер телефона"
        placeholder="7 (999) 999-99-99"
        type="text"
      />
      <BaseCheckbox
        v-model="checkboxF"
        required
        label-text="Согласие на обработку перс. данных"
      />
      <BaseButton class="w" type="transparent" @click.prevent="goMail">
        {{ buttonText }}
      </BaseButton>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form__wrapper{
  width: fit-content;
}
.form-project {
  padding: 40px;
  border-radius: 4px;
  //border: 1px solid $white;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    color:$white;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
