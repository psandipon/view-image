<template>
  <div style="overflow: hidden;">
    <!-- specifically hidding the overflow , if there is any, so the ui never breaks -->
    <img
      v-show="loading"
      @load="onImgLoad"
      :src="getUrl(item)"
      :height="getHeight"
      :width="getWidth"
    />
    <!-- here v-show is important, v-if won't work, v-show simply toggles the css display property, v-if removes the element from the dom  -->
    <div v-if="!loading">
      <!-- any kind of loader can be used , based on the requirement  -->
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      },
      required: true
    },
    id: {
      type: String,
      default: "1"
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false
    };
  },

  methods: {
    getUrl() {
      // just crafting the url based on the api
      return `https://picsum.photos/id/${this.id}/${this.width}/${this.height}`;
    },
    onImgLoad() {
      // simply detecting if image has loaded or not
      this.loading = true;
      return this.loading;
    }
  },
  computed: {
    getHeight() {
      // if auto true , expecting it to be responsive , so setting value it to 100%
      if (this.auto) return "100%";
      return this.height;
    },
    getWidth() {
      // if auto true , expecting it to be responsive , so setting value it to 100%
      if (this.auto) return "100%";
      return this.width;
    }
  }
};
</script>

<style></style>
