<template>
  <div class="h-screen w-screen p-4">
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <h1 class="text-2xl">
        Data Catalogue
      </h1>
    </div>
    <Nuxt />
  </div>
</template>
