<template>
  <div class="custom-component">
    我是自定义组件, 外部传过来的参数：{{ uid }}
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue'

  const props = defineProps({
    uid: {
      type: [ String, Number ],
      required: true
    },
    editor: {
      type: Object,
      required: true
    }
  })
</script>

<style>
  .custom-comp {

  }
</style>