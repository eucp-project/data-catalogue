<template>
  <div class="h-full w-full">
    <!-- breadcrumbs -->
    <div class="m-4 ml-9 text-lg">
      <Breadcrumbs :crumbs="crumbs" />
    </div>
    <!-- brief summary -->
    <p class="m-2 ml-9 text-lg prose">
      Select a tab and explore the available decadal predictions.
    </p>
    <!-- tab view -->
    <div class="flex bg-gray-100 m-4 ml-8">
      <button
        v-for="(tag, i) in tabs"
        :key="i"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        :class="tag.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
        @click="toggle(i)"
      >
        {{ tag.tag }}
      </button>
    </div>
    <div class="flex gap-8 m-8">
      <div class="flex flex-col gap-4 min-w-2/3">
        <h1 class="text-xl">
          {{ tab.title }}
        </h1>
        <nuxt-content class="break-words prose" :document="tab" />
        <h1 class="text-xl">
          Data access
        </h1>
        <ul
          v-for="(dataset, i) in tab.datasets"
          :key="i"
        >
          <li>{{ dataset.title }}</li>
          <li>Contact: {{ dataset.contact[0].name }}</li>
          <li>Data access:</li>
          <li class="prose">
            <a :href="`https://www.doi.org/` + dataset.doi" target="blank">{{ dataset.doi }}</a>
          </li>
          <li>---------------------------------------------</li>
        </ul>
      </div>
      <div class="flex flex-col items-center p-4">
        <img :src="tab.img" alt="topic picture" class="object-contain">
        <h2 class="italic">
          {{ tab.caption }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const tabs = await context.$content('decadal').sortBy('slug').fetch()
    const tab = tabs[0]
    return { tabs, tab }
  },
  data () {
    return {}
  },
  computed: {
    crumbs () {
      // assembly full path of current page, including the tag
      const fullPath = ('/data-catalogue' + this.$route.fullPath + '/' + this.tab.tag).toLowerCase()
      // break full path into crumbs for breadcrumbs view
      const crumbs = fullPath.substring(1).split('/')

      return crumbs
    }
  },
  mounted () {
    this.tabs = this.tabs.map(obj => ({ ...obj, isActive: false }))
    // default tab
    this.tab.isActive = true
  },
  methods: {
    toggle (i) {
      this.tab = this.tabs[i]
      // eslint-disable-next-line no-return-assign
      this.tabs.map(obj => obj.isActive = false)
      this.tabs[i].isActive = true
    }
  }
}
</script>
