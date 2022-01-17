<template>
  <div
    class="fixed top-0 right-0 bottom-0 left-0 flex justify-center bg-gray-900 bg-opacity-80"
    @click="$emit('close-modal')"
  >
    <div
      class="justify-center text-left overflow-auto m-10 p-10 rounded-xl mt-10 bg-white prose"
      @click.stop
    >
      <h2>{{ dataset.title }}</h2>
      <ul>
        <li>Contact: {{ dataset.contact }}</li>
        <li>License: {{ dataset.license }}</li>
        <li>Format: {{ dataset.format }}</li>
        <li class="break-words">
          Data access: <a :href="dataset.doi" target="blank">{{ dataset.doi }}</a>
        </li>
      </ul>
      <h4>Description</h4>
      <nuxt-content :document="dataset" />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="$emit('close-modal')"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataset: {
      type: Object,
      default: null,
      required: false
    }
  }
}
</script>
