<template>
  <!-- Buttons -->
  <div class="flex flex-col place-content-evenly h-full">
    <div class="flex gap-48 place-content-center">
      <NuxtLink to="cpm">
        <div class="border-2 p-8 rounded-lg text-3xl bg-red-400">
          CPM data
        </div>
      </NuxtLink>
      <NuxtLink to="decadal">
        <div class="border-2 p-8 rounded-lg text-3xl bg-green-400">
          Decadal
        </div>
      </NuxtLink>
      <NuxtLink to="topical">
        <div class="border-2 p-8 rounded-lg text-3xl bg-blue-400">
          Topical
        </div>
      </NuxtLink>
    </div>
  </div>
  </div>
</template>

<script>
export default {}
</script>
