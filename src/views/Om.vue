<template>
  <div class="container-xl bg">
    <div class="md:h-screen p-4 pt-16 md:grid grid-cols-4 grid-rows-3">
      <div class="box p-4 md:p-16 my-8 bg-gray-800">
        <p>
          Makerspace Ringebu er et non-profit makerspace i landsbyen Ringebu.
          Våre brukere er både enkeltpersoner. Makerspace ble etablert i
          oktober 2017 og flyttet inn i det gamle biblioteket.
        </p>
        <p>
          Vårt Makerspace er et prototypeverksted der mennesker med felles
          interesser møtes for å jobbe med prosjekter og dele ideer, utstyr og
          kunnskap.
        </p>
        <p>
          Alle er velkomne her. Våre medlemmer er produsenter, hobbyister,
          innovatører, spesialister, teknologier og harde arbeidere. Noen
          bruker Makerspace Ringebu som et sted å jobbe med hobbyer, andre har
          et profesjonelt behov.
        </p>
        <p>
          Skaperens mål er å være et attraktivt møte- og arbeidssted for
          produsenter og vanlige hobbyiset, og å bidra til å skape
          arbeidsplasser og nye interesser i regionen.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("../assets/nasa-earth.jpg");
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
