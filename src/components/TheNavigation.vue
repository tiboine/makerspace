<template>
  <nav class="flex fixed" id="nav">
    <router-link to="/" class="logo">Makerspace Ringebu</router-link>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Hjem</router-link>
      </li>
      <li class="links">
        <router-link to="/om">Om</router-link>
      </li>
      <li class="links">
        <router-link to="/kontakt">Kontakt</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
p,
a {
  font-size: 18px;
}
nav {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;

  transition: all 0.4s linear;
}
nav a {
  color: black;
  font-weight: bold;
}
.nav-links {
  display: flex;
  padding: 20px;
  margin: 0;
}
.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0 20px;
}
#nav a:hover {
  color: red;
}
.links {
  list-style: none;
}
.logo {
  text-decoration: none;
  color: white !important;
  padding: 20px;
  font-size: 23px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.sticky {
  /* background: rgba(0, 0, 0, 0.644); */
  /* background: #f5c21c; */
  background: black;
}
</style>
