<template>
  <div>
    <section id="comparison" class="section comparison">
      <div class="container">
        <h2 class="comparison-headline">
          Conseqüències<br>de l'ampliació del port
        </h2>
        <CoastlineComparison client:idle />
        <p>Lorem ipsum</p>
      </div>
    </section>
    <section id="lies" class="section lies">
      <div class="container">
        <h2 class="lies-headline">
          <span class="highlight">10 mentides</span>
          <span>sobre l'ampliació</span>
          <span>del port</span>
        </h2>
        <ol class="lies-list">
          <li>
            <p class="lie">
              <del>
                Es crearan milers de llocs de treball
              </del>
              <span class="false">FALS</span>
            </p>

            <p class="truth">
              El personal del port ha denunciat que amb l'automatització de la terminal es poden
              <strong>destruir fins a 500 llocs de treball</strong>
            </p>
          </li>
        </ol>
      </div>
    </section>
    <section id="headlines" class="headlines">
      <div class="container">
        <h2 class="headlines-headline">
          Una ampliació que no fa bé a ningú...
        </h2>
        <img src="" alt="Titular de Valencia Plaza: Los estibadores exponen que la ampliación del Puerto de València destruirá 500 empleos">
        <img src="" alt="Titular de Valencia Plaza: Los estibadores exponen que la ampliación del Puerto de València destruirá 500 empleos">
        <img src="" alt="Titular de Valencia Plaza: Los estibadores exponen que la ampliación del Puerto de València destruirá 500 empleos">
        <img src="" alt="Titular de Valencia Plaza: Los estibadores exponen que la ampliación del Puerto de València destruirá 500 empleos">
      </div>
    </section>
    <section id="videos" class="videos">
      <div class="container">
        <h2 class="videos-headline">
          Una ampliació <span>sense consens</span>
        </h2>
        <Videos client:visible />
      </div>
    </section>
    <section id="proposals" class="proposals">
      <div class="container">
        <h2 class="proposals-headline">
          <span>10 propostes</span>
          <span>per un port</span>
          <span>més sostenible</span>
        </h2>
        <ol>
          <li>Proposta 1</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  @import '../styles/_variables';

  h2 {
    font-size: clamp(4rem, 7.5vw, 7rem);
    line-height: 1.1;
    margin: 0;
  }

  .container {
    max-width: 1200px;
    padding: 0 3rem;
    margin: 0 auto;
  }

  .section {
    padding-bottom: 30vh;
  }

  .comparison {
    p {
      font-size: $text-base;
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  .lies {
    background: $white;

    h2 {
      transform: translateY(-50%);

      span {
        display: block;
        background: $white;
        width: fit-content;
        line-height: .5;
        margin-bottom: .15em;
        padding: .2em;
        padding-top: .4em;

        &.highlight {
          background: $yellow;
        }
      }
    }
  }
</style>
