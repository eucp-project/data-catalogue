<template>
  <div class="p-3">
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
</template>

<script>
export default {
  async asyncData (context) {
    const storyboards = await context.$content('storyboards')
      .sortBy('sort')
      .fetch()
    return { storyboards: storyboards.stories }
  },
  data () {
    return {
      domain: 'default' // default value for domain to display all storyboards
    }
  }
}
</script>
