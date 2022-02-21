<template>
  <div class="flex bg-gray-100">
    <nav>
      <ul>
        <li v-for="page in pages" :key="page.url" class="inline-block">
          <NuxtLink
            role="button"
            :to="page.url"
            class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pages: []
  }
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: rgb(59 130 246);
  border-bottom-width: 2px;
  border-color: rgb(59 130 246);
}
</style>
