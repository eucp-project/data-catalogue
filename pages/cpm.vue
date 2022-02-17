<template>
  <div>
    <!-- brief summary -->
    <p class="m-2 ml-9 text-lg prose max-w-none">
      Building upon CORDEX FPS-Convection, EUCP has performed convection-permitting model runs for multiple domains covering Europe and the outermost regions. This page provides an overview of the most relevant data and results from our preliminary analysis. Select a region on the map to start exploring.
    </p>
    <!-- map and tabs -->
    <div class="flex gap-4 m-8">
      <Map v-model="domain" />
      <div class="border-4 flex-grow">
        <div class="flex bg-gray-100">
          <button
            v-for="item in tabs"
            :key="item.id"
            class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            :class="item.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
            @click="toggle(item.id)"
          >
            {{ item.body }}
          </button>
        </div>
        <div v-if="tab.body == 'Overview'" class="p-3">
          <p> You select the following: {{ domain }}</p>
          <img src="cpm_analysis/cpm_prec.png" alt="cpm"> <!-- change the path when the figs are ready -->
        </div>
        <div v-if="tab.body == 'Storyboards'" class="p-3">
          <div v-if="domain == 'default'">
            <p>Read more about the stories in the regions highlighted on the map:</p>
            <div
              v-for="(stories, i) in storyboards"
              :key="i"
            >
              <p
                v-for="(story, j) in stories"
                :key="j"
                class="m-3 p-2 hover:underline italic font-medium"
              >
                <a :href="story.link" target="_blank">{{ story.title }}</a>
              </p>
            </div>
          </div>
          <div v-else>
            <p>Read more about the stories in this region:</p>
            <div
              v-for="(story, i) in storyboards[domain]"
              :key="i"
              class="m-3 p-2 hover:underline italic font-medium"
            >
              <p>
                <a :href="story.link" target="_blank">{{ story.title }}</a>
              </p>
            </div>
          </div>
        </div>
        <div v-if="tab.body == 'Lines of evidence'">
          <DataInContext />
        </div>
        <div v-if="tab.body == 'Demonstrator'" class="w-full h-full p-2">
          <CPManalysis />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      domain: 'default', // default value for domain to display all storyboards
      tab: {},
      tabs: [
        { isActive: true, body: 'Overview', id: 'overview' },
        { isActive: true, body: 'Storyboards', id: 'storyboards' },
        { isActive: true, body: 'Lines of evidence', id: 'lines-of-evidence' },
        { isActive: true, body: 'Demonstrator', id: 'demonstrator' },
        { isActive: true, body: 'TBA', id: 'tba' }
      ],
      storyboards: []
    }
  },
  async mounted () {
    let id = this.$route.hash.replace('#', '')
    if (id === '') {
      id = 'overview'
    }
    this.toggle(id)

    const storyboards = await this.$content('storyboards').sortBy('sort').fetch()
    this.storyboards = storyboards.stories
  },
  methods: {
    toggle (id) {
      this.tab = this.tabs.find(tab => tab.id === id)
      // eslint-disable-next-line no-return-assign
      this.tabs.map(obj => obj.isActive = false)
      this.tab.isActive = true
      // add hash tab name to router
      this.$router.push({ hash: this.tab.id })
    }
  }
}
</script>
