<template>
  <div class="flex gap-8 justify-start">
    <nuxt-content :document="page" class="prose" />
    <div class="flex flex-col">
      <img :src="page.img" alt="topic picture" style="width:auto;height:800px;object-fit: contain">
      <p class="italic">
        {{ page.caption }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content('decadal', params.page).fetch()
    return {
      page
    }
  }
}
</script>
