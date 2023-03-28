<template>
  <HeaderVue />

  <main>
    <div class="container static md:relative">
      <div
        class="absolute top-56 w-full grid md:grid-cols-2 flex-col rounded-[30px] items-center bg-white xl:px-32 md:px-12 md:top-0"
      >
        <LogoVue />
        <InformationBox @open="isOpenedModal = true" />
      </div>
    </div>
    <ModalWindowVue :is-opened-modal="isOpenedModal" @hide="hideModal" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderVue from './components/HeaderVue.vue'
import LogoVue from './components/LogoVue.vue'
import ModalWindowVue from './components/ModalWindow.vue'
import InformationBox from './components/InformationBox.vue'

const isOpenedModal = ref(false)
const hideModal = () => {
  isOpenedModal.value = false
}
</script>
