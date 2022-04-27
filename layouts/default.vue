<template>
  <div class="flex flex-col h-screen w-screen p-4 overflow-auto">
    <div class="flex gap-10 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <div class="flex-none">
        <h1 class="text-4xl">
          Data Catalogue
        </h1>
        <Breadcrumbs class="mt-2" />
      </div>
      <Navigation />
    </div>
    <!-- grey background bar for menu -->
    <div class="flex-none bg-gradient-to-r from-transparent via-gray-200 to-gray-200 w-full h-12 rounded" />
    <Nuxt class="flex-grow" />
  </div>
</template>
