<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-first">
        <p>
          <i class="fab fa-facebook"></i>
        </p>
        <p>
          Finn oss på
          <a
            href="https://www.facebook.com/groups/MakerspaceRingebu/"
            target="blank"
          >Facebook</a>
        </p>
      </div>
      <div class="footer-second">
        <p>Åpent hver onsdag</p>
        <p>kl 18:00-21:00++</p>
      </div>
      <div class="footer-third">
        <p>org nr: 920613799</p>
        <p>Ole Steigs gate 1, 2630 Ringebu</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: crimson;
  min-height: 150px;
  color: white;
}
.footer-content {
  padding: 40px 0 0 0;
  display: flex;
  justify-content: space-evenly;
}
.footer a {
  color: white;
}
.footer a:hover {
  color: black;
}
</style>
