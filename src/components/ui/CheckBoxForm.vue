<template>
  <form class="" action="">
    <div v-for="v in items" :key="v.id">
      <label><input class="m-3" type="checkbox" :value="v.value" />{{ v.title }}</label
      ><br />
    </div>
  </form>
</template>

<script setup lang="ts">

interface CheckBoxItem {
    id: number; value: boolean; title: string
}
defineProps({items : Array<CheckBoxItem>}) 

</script>


