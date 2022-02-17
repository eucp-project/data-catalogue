<template>
  <div class="h-screen w-screen p-4">
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <div class="flex-l">
        <h1 class="text-4xl">
          Data Catalogue
        </h1>
        <Breadcrumbs class="mt-2" />
      </div>
      <div class="ml-auto gap-10 m-2 mr-10 text-l space-x-5">
        <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">Decadal</button>
        <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">CPM</button>
        <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">Topical</button>
      </div>
    </div>

    <Nuxt class="pt-4" />
  </div>
</template>
