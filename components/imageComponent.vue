<template>
  <div>
    <!-- responsive with aspect ration  -->
    <v-img
      v-if="auto"
      :lazy-src="require('@/assets/squareLogo.png')"
      :src="getUrl(item)"
      aspect-ratio="1"
    />
    <!-- responsive with custom ratio : test-->
    <v-img
      v-else
      :lazy-src="require('@/assets/squareLogo.png')"
      :src="getUrl(item)"
      :height="height"
      :width="width"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
      required: true,
    },
    id: {
      type: Number,
      default: 1,
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    auto: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getUrl() {
      return `https://picsum.photos/id/${this.id}/${this.width}/${this.height}`;
    },
  },
};
</script>

<style></style>
