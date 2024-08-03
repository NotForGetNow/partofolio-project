<template>
  <div>
    <Header/>
    <div :class="{'mt-20': showMargin, 'mt-0': !showMargin}">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/HeaderComponent.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const showMargin = computed(() => {
  return route.path === '/sign-in' || route.path === '/create-account'
})
</script>


