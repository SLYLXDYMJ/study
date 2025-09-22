<template>
  <div class="custom-component">
    {{ value }}
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const value = ref('123123567')
</script>

<style>
  .custom-comp {

  }
</style>