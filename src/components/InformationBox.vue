<template>
  <div class="grid gap-2 px-7 md:w-full rounded-[30px]">
    <div class="my-6">
      <div class="text-2xl text-center">Good news!</div>
      <p class="text-base text-grey-dark font-light text-center">Your loan has been approved.</p>
    </div>

    <div class="divider mx-12"></div>

    <div class="grid grid-cols-2 gap-3 my-6 items-baseline">
      <div class="text-sm text-grey-light text-right">Personal loan offer</div>
      <div class="text-lg flex text-grey-dark">
        {{ personalOffer }}
        <div class="text-sm text-grey-dark px-1">€</div>
      </div>

      <div class="text-sm text-grey-light text-right">Loan period</div>
      <div class="text-lg text-grey-dark flex items-baseline">
        {{ perod }}
        <div class="text-sm text-grey-dark px-1">months</div>
      </div>

      <div class="text-sm text-grey-light text-right">Monthly payment</div>
      <div class="text-lg text-grey-dark flex">
        {{ mPayment }}
        <div class="text-sm text-grey-dark px-1">€</div>
      </div>
    </div>

    <div class="divider mx-12"></div>

    <div class="md:py-4 grid gap-3">
      <div class="grid grid-cols-2 gap-3 items-baseline md:py-0">
        <div class="text-sm text-grey-light text-right">Interest rate</div>
        <div class="text-lg text-grey-dark flex">
          {{ intrest }}
          <div class="text-sm text-grey-dark px-1">%</div>
        </div>
      </div>

      <div
        class="flex md:grid md:grid-cols-2 justify-center gap-3 items-center h-16 md:h-auto md:border-0 border border-grey-line rounded-[20px]"
      >
        <div class="text-sm text-grey-light md:text-right">Margin</div>
        <div class="text-lg text-grey-dark flex items-baseline">
          {{ margin }}
          <div class="text-sm text-grey-dark px-1">% + 6 months EURIBOR (0 %)</div>
        </div>
      </div>
    </div>

    <div class="divider mx-12"></div>

    <div class="text-center text-grey-dark py-2 font-light flex justify-center items-baseline">
      <svg
        class="h-4 w-4 text-gray-500 mx-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      Promo code applied
    </div>

    <div class="divider mx-12"></div>


    <ButtonVue :title="'View offer details'"/>

    <button @click="openModal" class="text-violet-dark">Not interested</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonVue from './ui/ButtonVue.vue';


const emit = defineEmits(['open'])
const openModal = () => {
  return emit('open')
}

const personalOffer = ref('1,700.00');
const perod = ref(36);
const mPayment = ref(95.27);
const intrest =ref(12.90);
const margin =ref(8.9);

</script>
