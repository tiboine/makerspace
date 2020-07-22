<template>
  <nav class="w-full flex fixed justify-between h-16 items-center px-4 lg:px-10 m-auto" id="nav">
    <router-link to="/" class="text-white">Makerspace Ringebu</router-link>
    <ul
      class="hidden lg:flex flex-col lg:flex-row bg-black lg:bg-transparent pb-4 pt-20 lg:pt-0 mt-40 lg:mt-0"
      div
      id="menu-item"
    >
      <li class="px-24 hover:bg-white w-auto">
        <router-link to="/" class="text-xl px-12 block hover:text-black">Hjem</router-link>
      </li>
      <li class="hover:bg-white">
        <router-link to="/om" class="text-xl px-12 block hover:text-black">Om</router-link>
      </li>
      <li class="hover:bg-white">
        <router-link to="/kontakt" class="text-xl px-12 block hover:text-black">Kontakt</router-link>
      </li>

      <li class="hover:bg-white">
        <router-link to="/kontakt" class="text-xl px-12 block hover:text-black">Kontakt</router-link>
      </li>

      <li class="hover:bg-white">
        <router-link to="/kontakt" class="text-xl px-12 block hover:text-black">mer-info-dot-com</router-link>
      </li>
    </ul>

    <div class="px-4 cursor-pointer fixed right-0 flex items-center" div id="hamburger">
      <svg class="w-8 lg:hidden" id="hamburger-icon" fill="white" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>

      <svg class="hidden w-8 lg:hidden" id="x-icon" fill="white" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </nav>
</template>

<style scoped>
p,
a {
  font-size: 18px;
}
nav {
  transition: all 0.4s linear;
  /* transform: translateX(-50%);
  left: 50%; */
}
nav a {
  @apply text-white;
  font-weight: bold;
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
</style>
