<template>
  <nav class="flex fixed px-10 " id="nav">
    <router-link to="/" class="text-white">Makerspace Ringebu</router-link>
    <ul class="flex ">
      <li class=" px-6 ">
        <router-link to="/" class="hover:text-gray-300">Hjem</router-link>
      </li>
      <li class=" px-6">
        <router-link to="/om" class="hover:text-gray-300">Om</router-link>
      </li>
      <li class=" px-6">
        <router-link to="/kontakt" class="hover:text-gray-300"
          >Kontakt</router-link
        >
      </li>

      <li class=" px-6">
        <router-link to="/kontakt" class="hover:text-gray-300"
          >Kontakt</router-link
        >
      </li>

      <li class=" px-6">
        <router-link to="/kontakt" class="hover:text-gray-300"
          >mer-info-dot-com</router-link
        >
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
  @apply text-white;
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

.links {
  list-style: none;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  @apply text-red-500;
}
.nav-color {
  background: black;
  @apply shadow-2xl;
}
</style>
