<template>
  <div class="container-xl bg bg-fixed">
    <div class="md:block">
      <p class="hidden md:block text-6xl md:py-16 text-orange-600">
        Velkommen til Makerspace Ringebu
      </p>
    </div>
    <div
      class="max-w-3xl my-24 md:my-48 box p-4 md:p-16 bg-black w-auto inline-block"
    >
      <p>
        Makerspace Ringebu er et åpent verksted og hobbyrom med fokus på
        teknologi og læring.
      </p>
      <p>
        Et rom fylt av verktøy og nyskapende teknologi som f.eks. 3D-printere,
        laserskjærere, loddebolter, symaskiner og roboter som lar deg skape ting
        på nye måter.
      </p>
    </div>
    <div class="flex justify-end p-4 text-gray-600">
      <svg class="w-4 " fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <span class="text-xs ">
        <a
          href="https://unsplash.com/@othentikisra?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Israel Palacio</a
        >
        @
        <a
          href="https://unsplash.com/@tiboine/likes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >Unsplash</a
        ></span
      >
    </div>

    <div class="xl:grid grid-cols-3">
      <div class="container-xl p-4 md:p-16 justify-between bg-red-600">
        <h2 class="text-2xl md:text-5xl text-white uppercase pb-8" div id="hva">
          Hva er et makerspace?
        </h2>
        <div class="box p-4 md:p-8 bg-purple-600">
          <p>
            Et makerspace er en form for digital sløyd, et rom fylt av verktøy
            og nyskapende teknologi som f.eks. 3D-printere, laserskjærere,
            loddebolter, symaskiner og roboter som lar deg skape ting på nye
            måter.
          </p>
          <br />
          <p>
            Et makerspace inspirerer folk til å gå fra å være forbrukere til å
            bli skapende mennesker ved å kombinere kunst, teknologi og vitenskap
            på nye og innovative måter.
          </p>
        </div>
      </div>
      <div class="container-xl p-4 md:p-16 justify-between bg-red-600">
        <h2 class="text-2xl md:text-5xl text-white uppercase pb-8">
          Hvem er det for?
        </h2>
        <div class="box p-4 md:p-8 bg-blue-600">
          <p>
            Det for alle som har lyst å enten lære noe nytt, eller fikse på noe
            som du kanskje trenger verktøy til.
          </p>
          <p>Uansett alder så er du velkommen!</p>
        </div>
      </div>
      <div class="container-xl p-4 md:p-16 justify-between bg-red-600">
        <h2 class="text-2xl md:text-5xl text-white uppercase pb-8">
          Hva koster det?
        </h2>
        <div class="box p-4 md:p-8 bg-green-600 mb-8">Ingenting.</div>
      </div>
    </div>
    <div class="bg2 bg-fixed h-64"></div>
    <div class="container-xl bg-gray-600">
      <h2 class="text-2xl md:text-5xl text-white uppercase py-16">
        Hva finner du på Makerspace?
      </h2>
      <div class="lg:grid grid-cols-3 lg:p-12 gap-20">
        <div class="box mb-12 p-4 md:p-8 bg-red-600 shadow-xl m-4 lg:m-0">
          <h2 class="text-lg md:text-xl text-white uppercase pb-2">Arduino</h2>
          <p>
            Arduino er en åpen kildekode-elektronikkplattform basert på
            brukervennlig maskinvare og programvare. Den er beregnet på alle som
            lager interaktive prosjekter.
          </p>
        </div>
        <div class="box mb-12 p-4 md:p-8 bg-blue-600 shadow-xl m-4 lg:m-0">
          <h2 class="text-lg md:text-xl text-white uppercase pb-2">
            Micro:bit
          </h2>
          <p>
            BBC micro:bit er en liten datamaskin som åpner for en verden av
            kreative programmeringsprosjekter.
          </p>
        </div>
        <div class="box mb-12 p-4 md:p-8 bg-green-600 shadow-xl m-4 lg:m-0">
          <h2 class="text-lg md:text-xl text-white uppercase pb-2">
            3D-printing
          </h2>
          <p>
            3D-utskrift eller 3D-printing, også kalt additiv produksjon, er en
            produksjonsteknikk der tredimensjonale objekter bygges opp lag for
            lag ved hjelp av et skriverhode. Utskriften av hvert lag kan minne
            en del om todimensjonal blekkutskrift.
          </p>
        </div>
        <div class="box mb-12 p-4 md:p-8 bg-teal-600 shadow-xl m-4 lg:m-0">
          <h2 class="text-lg md:text-xl text-white uppercase pb-2">
            Lego Mindstorm
          </h2>
          <p>
            Lego Mindstorms er en maskinvare- og programvarestruktur som er
            produsert av Lego for utvikling av programmerbare roboter basert på
            Lego byggesteiner. Hver versjon av systemet inkluderer en
            intelligent murstein-datamaskin som styrer systemet, et sett med
            modulære sensorer og motorer, og Lego-deler fra Technic-linjen for å
            lage de mekaniske systemene.
          </p>
        </div>
        <div class="box mb-12 p-4 md:p-8 bg-orange-600 shadow-xl m-4 lg:m-0">
          <h2 class="text-lg md:text-xl text-white uppercase pb-2">
            Laser og gravering
          </h2>
          <p>
            Lasergravering er en form for datastyrt lasermerking som er mer og
            mer brukt innen bransjene industri og reklame/profilering
          </p>
        </div>
        <div class="box mb-12 p-4 md:p-8 bg-purple-600 shadow-xl m-4 lg:m-0">
          <h2 class="text-lg md:text-xl text-white uppercase pb-2">Edison</h2>
          <p>
            Edison er en robust pedagogisk robot designet for å gi koding liv
            for studenter og hjelpe lærere å levere meningsfull utdanning fra
            det 21. århundre.
          </p>
        </div>
      </div>
      <div class="box"></div>
      <iframe
        id="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901.9611847226818!2d10.138288452263176!3d61.529663682396155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466ae63e8f3e84e9%3A0x2b1ed0e856b6388f!2sMakerspace%20Ringebu!5e0!3m2!1sen!2sno!4v1588974334076!5m2!1sen!2sno"
        width="100%"
        height="650"
        frameborder="0"
        style="border: 0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("../assets/img/israel-palacio-2k.jpg");
}
.bg2 {
  background-image: url("../assets/img/makerspace-blurred-big.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
