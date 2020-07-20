<template>
  <div id="app">
    <TheNavigation />
    <div id="content">
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
    TheFooter
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Roboto Condensed", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: space-between;
  font-family: "Roboto Condensed", sans-serif;
}

.first {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
}
.content {
  margin: 0 auto;
  /* padding-top: 100px; */
  /* margin-bottom: -100px; */
  /* max-width: 1200px; */
}
.container {
  width: 100%;
}
.bg {
  background-repeat: no-repeat;
  background-size: auto;
  background-color: #e2ac02;
}
@media only screen and (min-width: 2000px) {
  .bg {
    background-size: cover;
  }
}
</style>
