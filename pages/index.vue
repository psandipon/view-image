<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <c-option-field
        label="Find Image By Artist"
        v-model="searchParam.id"
        :items="GET_IMAGE_DATA"
        :itemText="['author']"
        icon="magnify"
      />
      <v-row class="ml-2" justify="center" align="center">
        <v-col cols="1">
          <v-row justify="center" align="center">
            <v-switch v-model="auto"> </v-switch>
          </v-row>
        </v-col>
        <v-col cols="11" class="pl-5">
          <v-slider
            v-model="slider"
            class="align-self-stretch mt-0"
            min="0"
            max="500"
            step="1"
            thumb-label
            :disabled="auto"
            hide-details
          ></v-slider>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      xs="12"
      sm="12"
      md="6"
      lg="4"
      xl="4"
      v-for="(item, i) in getFilteredData"
      :key="i"
    >
      <v-hover v-slot="{ hover }">
        <v-card
          class="pa-5"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
        >
          <v-row>
            <v-col xs="6" sm="6" md="6" lg="12" xl="12">
              <image-component
                :item="item"
                :id="item.id"
                :width="slider"
                :height="slider"
                :auto="auto"
              >
              </image-component>
            </v-col>
            <v-col xs="6" sm="6" md="6" lg="12" xl="12">
              <span class="title"> {{ item.author }} </span>
              <br />
              <span class="overline">
                {{ item.width }} * {{ item.height }}
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import imageComponent from "~/components/imageComponent.vue";
import cOptionField from "~/components/ui/optionField";
export default {
  components: {
    imageComponent,
    cOptionField
  },
  data() {
    return {
      searchParam: {},
      slider: 100,
      auto: true
    };
  },
  mounted() {
    this.FETCH_IMAGE_DATA();
  },
  computed: {
    ...mapGetters("module/image", ["GET_IMAGE_DATA"]),
    getFilteredData() {
      if (this.searchParam.id == undefined) {
        return this.GET_IMAGE_DATA;
      } else
        return this.GET_IMAGE_DATA.filter(
          img => img.id === this.searchParam.id
        );
    }
  },
  methods: {
    ...mapActions("module/image", ["FETCH_IMAGE_DATA"])
  }
};
</script>
