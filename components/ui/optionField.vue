<template>
  <div>
    <v-autocomplete
      :items="items"
      :label="label"
      :item-value="itemValue"
      :item-text="showItemText"
      :input="dataInput"
      :value="value"
      :prepend-inner-icon="getIcon"
      append-icon=""
      :rules="rules"
      @change="dataInput($event)"
      :hide-details="hideDetails"
      :solo="solo"
      filled
      flat
      clearable
      outlined
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    label: {
      required: true
    },
    items: {
      type: Array,
      default: function() {
        return [];
      },
      required: true
    },
    itemValue: {
      type: String,
      default: "id"
    },
    itemText: {
      type: Array,
      default: function() {
        return ["id", "name"];
      }
    },
    icon: {
      type: String,
      default: "mdi-pencil"
    },

    rules: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hideDetails: {
      type: Boolean,
      default: true
    },
    solo: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 400
    }
  },

  data: () => ({
    model: ""
  }),

  computed: {
    getIcon() {
      if (this.icon.split("-")[0] !== "mdi") {
        return "mdi-" + this.icon;
      }
      return this.icon;
    },
    getWidthStyle() {
      return `width: ${this.width}px;`;
    }
  },

  methods: {
    dataInput(val) {
      this.$emit("input", val);
    },
    showItemText(item) {
      let text = "";
      let arrLength = this.itemText.length - 1;
      this.itemText.forEach(function(ele, index) {
        let itemVal = item[ele];
        if (itemVal == undefined)
          itemVal = "[Data Not Found By Element - {" + ele + "}]";
        text += itemVal;
        if (arrLength != index) {
          text += " - ";
        }
      });
      return text;
    }
  }
};
</script>

<style></style>
