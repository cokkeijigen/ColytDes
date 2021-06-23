<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { defineProps, ref, getCurrentInstance  } from 'vue'
const { $http: http } = getCurrentInstance().appContext.config.globalProperties
defineProps({
  msg: String
})
const getBilibili = async () => {
  const res = await http.get('/bili/v/anime/finish/')
  console.log('res', res);
}
getBilibili()
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
