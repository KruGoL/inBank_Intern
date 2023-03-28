<template>
  <div v-if="isOpenedModal" @click.stop="closeModal()" class="fixed flex backdrop-blur-lg inset-0">
    <div
      @click.stop
      class="bg-white md:rounded-[20px] w-screen h-screen m-auto md:w-[500px] md:h-[680px] px-8 grid content-top drop-shadow-[0_4px_10px_rgba(130,130,130,0.25)]"
    >
      <button @click="closeModal()" class="h-6 w-6 mt-8">
        <svg
          class="h-6 w-6 text-grey-light"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div>
        <div class="text-lg">Help us improve</div>
        <div class="text-base font-light my-3">
          We want to offer our clients the best experience. Your feedback will help us get better.
          You can select multiple answers.
        </div>
      </div>

      <CheckBoxForm :items="values" />
      <ButtonVue :title="'Cancel loan application'"/>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonVue from './ui/ButtonVue.vue';
import CheckBoxForm from './ui/CheckBoxForm.vue';

defineProps({ isOpenedModal: Boolean })
const emit = defineEmits(['hide'])

const closeModal = () => {
  return emit('hide')
}

const values = [
  { id: 1, value: false, title: 'Loan amount is too small' },
  { id: 2, value: false, title: 'Interest is too high' },
  { id: 3, value: false, title: 'Contract fee is too high' },
  { id: 4, value: false, title: 'Not sure if I should take a loan' },
  { id: 5, value: false, title: 'I prefer another bank' },
  { id: 6, value: false, title: 'Timing is not right' },
  { id: 7, value: false, title: 'Other' }
]
</script>
