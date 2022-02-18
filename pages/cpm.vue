<template>
  <div>
    <div class="flex gap-4 m-8">
      <Map v-model="domain" />
      <div class="border-4 flex-grow">
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
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      domain: 'default', // default value for domain
      pages: [
        { title: 'CPM home', url: '/cpm' },
        { title: 'Explore', url: '/cpm/explore' },
        { title: 'Analyse', url: '/cpm/analyse' },
        { title: 'Download', url: '/cpm/download' },
        { title: 'More info', url: '/cpm/references' }
      ]
    }
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
