<template>
    <header v-if="ShowHeader" class="flex justify-between px-16 py-5 border-b-2">
        <router-link to="/">
            <div class="flex items-center font-bold text-xl">
                <img width="50px" src="/img/portfolio.png" alt="portfolio">
                <h2 class="ps-3">Portfolio Project</h2>
            </div>
        </router-link>

        <div class="flex">
            <ul class="flex items-center justify-between px-7 space-x-6 text-lg">
            <li>
                <router-link to="/about-us">
                <span>About us</span>
                </router-link>
            </li>
            <li>
                <router-link to="/contacts">
                <span>Contacts</span>
                </router-link>
            </li>
            </ul>
            <ul class="flex items-center justify-between px-7 space-x-6 text-lg">
            <li>
                <router-link to="/sign-in">
                <span>Sign In</span>
                </router-link>
            </li>
            <li>
                <router-link to="/create-account">
                <span>Create Account</span>
                </router-link>
            </li>
            </ul>
        </div>
    </header>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const ShowHeader = computed(() => {
    return route.path === '/' || route.path === '/contacts' || route.path === '/about-us';
  });
  </script>
  