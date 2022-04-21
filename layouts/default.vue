<template>
  <div class="h-screen w-screen p-4">
    <div class="flex gap-10 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <div class="flex-l">
        <h1 class="text-4xl">
          Data Catalogue
        </h1>
        <Breadcrumbs class="mt-2" />
      </div>
      <Navigation />
    </div>
    <!-- grey background bar for menu -->
    <div class="bg-gradient-to-r from-transparent via-gray-200 to-gray-200 w-screen h-11" />
    <Nuxt class="pt-4" />
  </div>
</template>
