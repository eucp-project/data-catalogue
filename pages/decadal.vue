<template>
  <div class="h-full w-full">
    <!-- brief summary -->
    <p class="m-2 ml-9 text-lg prose">
      Select a tab and explore the available decadal predictions.
    </p>
    <!-- tab view -->
    <div class="flex bg-gray-100 m-4 ml-8">
      <button
        v-for="tag in tabs"
        :key="tag.id"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        :class="tag.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
        @click="toggle(tag.id)"
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
  mounted () {
    this.tabs = this.tabs.map(obj => ({ ...obj, isActive: false }))
    // default tab
    this.tab.isActive = true

    // redirect to the tab based on given route
    let tabName = this.$route.hash.replace('#', '')

    if (tabName !== '') {
      tabName = tabName[0].toUpperCase() + tabName.substring(1)
      this.toggle(this.tabs.find(tab => tab.tag === tabName).id)
    } else {
      this.toggle(0)
    }

    // add hash tab name to router -> display default tab
    this.$router.push({ hash: this.tab.tag.toLowerCase() })
  },
  methods: {
    toggle (id) {
      this.tab = this.tabs.find(tab => tab.id === id)
      // eslint-disable-next-line no-return-assign
      this.tabs.map(obj => obj.isActive = false)
      this.tab.isActive = true
      // add hash tab name to router
      this.$router.push({ hash: this.tab.tag.toLowerCase() })
    }
  }
}
</script>
