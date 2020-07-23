<template>
  <div id="app">
    <TheNavigation />

    <div id="content" class="">
      <router-view :key="$route.path" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  scroll-behavior: smooth;
}

#app {
  font-family: "Roboto Condensed", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.bg {
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (min-width: 2000px) {
  .bg {
    background-size: cover;
  }
}
</style>
