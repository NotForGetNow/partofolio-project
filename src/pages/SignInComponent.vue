<template>
  <div class="max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-white">
    <h2 class="text-xl font-bold text-center mb-6">Sign In</h2>
    <form class="space-y-4">
      <div>
        <label for="email" class="block text-left mb-1">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" class="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label for="password" class="block text-left mb-1">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" class="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <router-link to="/Marketplace">
        <button type="submit" class="w-full py-2 mt-9 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign In</button>
      </router-link>
    </form>
  </div>
</template>
