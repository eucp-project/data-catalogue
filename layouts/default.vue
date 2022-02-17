<template>
  <div class="h-screen w-screen p-4">
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <div>
        <h1 class="text-4xl">
          Data Catalogue
        </h1>
        <Breadcrumbs class="mt-2" />
      </div>
    </div>
    <Nuxt class="pt-4" />
  </div>
</template>
