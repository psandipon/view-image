<template>
  <v-app dark>
    <v-app-bar color="white" elevate-on-scroll fixed app>
      <v-btn to="/" text color="white">
        <v-img
          max-height="100"
          max-width="180"
          :src="require('@/assets/logo.png')"
          class="mr-0 pl=0 ml-0"
          contain
        ></v-img>
      </v-btn>

      <v-spacer />
      <v-btn
        color="primary"
        :fab="phone"
        :small="phone"
        class="mr-5 elevation-1"
      >
        <v-icon :left="!phone" dark>
          mdi-account
        </v-icon>
        <span v-if="!phone"> buyer login </span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import cOptionField from "~/components/ui/optionField";
export default {
  mixins: [global],
  components: {
    cOptionField
  },
  data() {
    return {
      phone_: false
    };
  },
  mounted() {
    this.phone_ = this.phone;
  },
  computed: {
    phone() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    }
  },
  methods: {}
};
</script>
