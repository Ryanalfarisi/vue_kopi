<template>
  <div id="app">
    <router-view />
    <Footer :selected="selected_menu" />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      selected_menu: ""
    };
  },
  components: {
    Footer
  }
};
</script>
<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
