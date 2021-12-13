<template>
  <div>
    <h1 class="text-2xl m-4">
      Disclaimer: This page is a work in progress and does not currently contain dependable climate information!
    </h1>
    <div class="flex gap-4 m-4">
      <Map v-model="domain" />
      <div class="border-4 flex-grow">
        <div class="flex bg-gray-100">
          <button
            v-for="(item, i) in tabs"
            :key="i"
            class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            :class="item.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
            @click="toggle(i)"
          >
            {{ item.body }}
          </button>
        </div>
        <div v-if="tab.body == 'Overview'" class="p-3">
          <p> You select the following: {{ domain }}</p>
          <img src="cpm_analysis/cpm_prec.png" alt="cpm"> <!-- change the path when the figs are ready -->
        </div>
        <div v-if="tab.body == 'Storyboards'" class="p-3">
          <p>Read more about the stroies in this region:</p>
          <div
            v-for="(story, i) in storyboards[domain]"
            :key="i"
            class="m-3 p-3 hover:underline italic font-medium"
          >
            <p>
              <a :href="story.link" target="_blank">{{ story.title }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      domain: '',
      tab: {},
      tabs: [
        { isActive: true, body: 'Overview' },
        { isActive: true, body: 'Storyboards' },
        { isActive: true, body: 'Lines of evidence' },
        { isActive: true, body: 'Demonstrator' },
        { isActive: true, body: 'TBA' }
      ],
      storyboards: []
    }
  },
  async mounted () {
    this.toggle(0)

    const storyboards = await this.$content('storyboards').sortBy('sort').fetch()
    this.storyboards = storyboards.stories
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
