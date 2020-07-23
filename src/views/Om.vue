<template>
  <div class="container-xl bg">
    <div class="md:h-screen p-4 pt-16">
      <div class="box p-4 md:p-16 my-8 bg-gray-800 max-w-5xl m-auto mt-64">
        <p>
          Makerspace Ringebu er et non-profit makerspace i landsbyen Ringebu.
          Våre brukere er både enkeltpersoner. Makerspace ble etablert i oktober
          2017 og flyttet inn i det gamle biblioteket.
        </p>
        <p>
          Vårt Makerspace er et prototypeverksted der mennesker med felles
          interesser møtes for å jobbe med prosjekter og dele ideer, utstyr og
          kunnskap.
        </p>
        <p>
          Alle er velkomne her. Våre medlemmer er produsenter, hobbyister,
          innovatører, spesialister, teknologier og harde arbeidere. Noen bruker
          Makerspace Ringebu som et sted å jobbe med hobbyer, andre har et
          profesjonelt behov.
        </p>
        <p>
          Skaperens mål er å være et attraktivt møte- og arbeidssted for
          produsenter og vanlige hobbyiset, og å bidra til å skape
          arbeidsplasser og nye interesser i regionen.
        </p>
      </div>
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
          href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >NASA</a
        >
        @
        <a
          href="https://unsplash.com/@tiboine/likes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          >Unsplash</a
        ></span
      >
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("../assets/img/nasa-ocean-2k.jpg");
}
.first {
  grid-template-areas:
    ". om ."
    ". . .";
}

#om {
  grid-area: om;
  color: white;
  font-size: 20px;
}
</style>
