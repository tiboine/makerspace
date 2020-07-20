<template>
  <div class="container bg">
    <div class="content first">
      <p id="welcome">Velkommen til Makerspace Ringebu</p>
      <div id="box1" div class="box">
        <p>
          Makerspace Ringebu er et åpent verksted og hobbyrom med fokus på
          teknologi og læring.
        </p>
        <p>
          Et rom fylt av verktøy og nyskapende teknologi som f.eks.
          3D-printere, laserskjærere, loddebolter, symaskiner og roboter som
          lar deg skape ting på nye måter
        </p>
      </div>
    </div>
    <section class="andre">
      <div id="box2" div class="box">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        architecto magnam esse quasi ipsum iusto magni cum a eos commodi totam
        ipsam repellendus, illo similique facere ea modi. Saepe incidunt
        laudantium vero voluptates, suscipit ratione commodi pariatur maxime totam
        illo modi cupiditate dolorem! Nemo saepe dolorem accusamus dignissimos
        tenetur non sequi sunt fugiat voluptatem repellat voluptate repellendus
        reiciendis, odit excepturi suscipit quis mollitia magni molestiae enim
        corrupti sed, ipsum illum! Vitae unde dicta dignissimos, maiores maxime id
        repudiandae voluptatum velit laboriosam quibusdam soluta natus hic sunt
        autem libero veritatis debitis reprehenderit, corporis ut accusamus?
        Officia dignissimos accusantium in ratione. Quo.Lorem ipsum dolor sit amet.
      </div>
    </section>
    <section id="hvor" class="hvor">
      <h2 class="heading">Her finner du Makerspace Ringebu</h2>
      <section>
        <p>Vi holder til i det gamle banklokalet midt i Ringebu sentrum</p>
        <p>Ole Steigs gate 1</p>
      </section>
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
    </section>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("../assets/joanna-kosinska.jpg");
}

.container {
  height: 100%;
}
.content {
}
.first {
  grid-template-areas:
    "welcome welcome welcome "
    ". box1 .";
}
#welcome {
  grid-area: welcome;
  color: white;
  font-size: 50px;
  text-transform: uppercase;
}
.box {
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  font-size: 22px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

#box1 {
  grid-area: box1;
  background: cornflowerblue;
}
#box2 {
  background: #e2ac02;
  width: 500px;
}
.andre {
  margin: 0 auto;
  padding: 50px;
  background: cornflowerblue;
}
</style>
