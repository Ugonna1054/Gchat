<template>
  <div class="loader-scr">
    <vue-element-loading
      :active="loading"
      :is-full-screen="true"
      :text="loadingText"
      size="45"
      spinner="bar-fade-scale"
      color="#14899b"
    />
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
  name: "Loader",
  components: {
    VueElementLoading
  },
  props: {
    loadingText: {
      type: String,
      default: "loading...."
    },
    loading: {
      type: Boolean
    }
  }
};
</script>

<style scoped></style>
