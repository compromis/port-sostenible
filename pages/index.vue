<template>
  <main>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        smooth: true,
        tablet: { smooth: false, breakpoint: 0 },
        smartphone: { smooth: false, breakpoint: 0 }
      }"
    >
      <nav :class="['nav',{'hide-nav': widthComparison > 99 }]">
        <h1>Per un port sostenible</h1>
        <div class="logo">
          <a href="https://compromis.net">
            <span class="sr-only">Compromís</span>
            <div class="logo-wrapper"><compromis-logo mono aria-hidden /></div>
          </a>
        </div>
      </nav>
      <header id="Comparison" class="comparison">
        <div data-scroll-section class="comparison-section images">
          <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
            <div id="rail-images" class="rail" />
            <div class="comparison-slide" data-scroll data-scroll-sticky data-scroll-target="#rail-images">
              <div class="image-wrapper">
                <div class="image image-a" />
                <div class="image image-b" :style="{ '--progress': comparisonProgress }" />
              </div>
            </div>
          </div>
        </div>
        <div class="comparison-texts">
          <div data-scroll-section class="comparison-section year-1960">
            <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
              <div id="rail-1960" class="rail" />
              <div
                class="comparison-slide text"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#rail-1960"
              >
                1960
                <swipe-up :class="['swipe-up-icon', { scrolled }]" />
              </div>
            </div>
          </div>
          <div data-scroll-section class="comparison-section year-2021">
            <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
              <div id="rail-2021" class="rail" />
              <div
                class="comparison-slide text top-0"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#rail-2021"
              >
                {{ new Date().getFullYear() }}
              </div>
            </div>
          </div>
          <div data-scroll-section class="comparison-section header">
            <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
              <div id="rail-header" class="rail" />
              <div
                class="comparison-slide text text-header top-0"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#rail-header"
              >
                <h2>Les conseqüències de <br> l'ampliació del port</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="intro-paragraph" data-scroll-section>
        <div class="container">
          <p>
            Com demostren aquestes imatges de l'Institut Cartogràfic Valencià, la construcció del dic d'abric
            de l'ampliació del port de València ha sigut un desastre per al litoral sud de la ciutat.
            <strong>Més de 80 metres de platja han desaparegut per l'erosió, i el cordó dunar que protegeix
              el Parc Natural de l'Albufera de la seua salinització està en perill</strong>.
          </p>

          <p>
            En plena <strong>Emergència Climàtica</strong> no podem continuar apostant per infraestructures insostenibles
            que atempten contra el nostre litoral, la nostra economia i la salut de la ciutadania.
            I per això, des de <strong>Compromís</strong> defensarem un port sostenible, lliure d'especuladors i empresaris sense escrúpols.
            <strong>Perquè volem un port per a València i no contra València.</strong>
          </p>
        </div>
      </div>
      <section id="Lies" class="lies cards-section" data-scroll-section>
        <h2 class="section-header">
          <strong>10 mentides</strong><br>
          <span>sobre l'ampliació</span>
          <span>del port</span>
        </h2>
        <div id="scroll-direction" class="container">
          <div class="cards-list">
            <div class="card-wrapper">
              <floating-card type="lie" number="1" data-scroll data-scroll-speed="2">
                <template #top>
                  Es crearan milers de llocs de treball
                </template>
                <template #bottom>
                  El personal del port ha denunciat que amb l'automatització de la terminal es poden destruir fins a 500 llocs de treball
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset">
              <floating-card type="lie" number="2" data-scroll data-scroll-speed="3">
                <template #top>
                  Té una avaluació ambiental vigent favorable
                </template>
                <template #bottom>
                  L’avaluació de 2007 està caducada.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="3" data-scroll data-scroll-speed="2">
                <template #top>
                  Millorarà l’economia valenciana
                </template>
                <template #bottom>
                  No, sols respon a l’avarícia d’una de les empreses més contaminants del planeta.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="4" data-scroll data-scroll-speed="3">
                <template #top>
                  No costarà ni un euro a la ciutadania
                </template>
                <template #bottom>
                  Tindrà un cost directe de, com a mínim, 660 milions públics, el mateix que valen més de 100 escoles públiques.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="5" data-scroll data-scroll-speed="2">
                <template #top>
                  No afectarà l’Albufera ni les platges del sud
                </template>
                <template #bottom>
                  Els dics del Port ja afecten les platges del sud, i posen en perill el parc natural de l’Albufera.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="6" data-scroll data-scroll-speed="3">
                <template #top>
                  El Port necessita l’ampliació per a ser competitiu
                </template>
                <template #bottom>
                  El que necessita per a ser més competitiu és la connexió ferroviària del Corredor Mediterrani.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="7" data-scroll data-scroll-speed="2">
                <template #top>
                  L’ampliació ja està feta perquè els dics ja es van fer
                </template>
                <template #bottom>
                  Queda la part més important del projecte, l’emplenament d’uns 250 camps de futbol de ciment i àrids.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="8" data-scroll data-scroll-speed="3">
                <template #top>
                  S’està escoltant a la ciutadania
                </template>
                <template #bottom>
                  No, actuen de forma unilateral sense escoltar el veïnat, els treballadors, les expertes, les conselleries o l’Ajuntament de València.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="9" data-scroll data-scroll-speed="2">
                <template #top>
                  El Port de Barcelona farà una ampliació
                </template>
                <template #bottom>
                  Barcelona la va aturar en 2020 per no ser viable econòmicament.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="10" data-scroll data-scroll-speed="3">
                <template #top>
                  El govern d’Espanya ha  autoritzat l’ampliació
                </template>
                <template #bottom>
                  El govern ha traslladat a l’Autoritat Portuària (organisme independent), la recomanació de fer un nou informe ambiental.
                </template>
              </floating-card>
            </div>
          </div>
          <div id="direction" class="marquees">
            <div class="marquee one">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-target="#direction">
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee two">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#direction">
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee three">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="5"
                data-scroll-delay="0.05"
                data-scroll-target="#direction"
              >
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee four">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-target="#direction">
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee five">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-10"
                data-scroll-delay="0.05"
                data-scroll-target="#direction"
              >
                Fals Fals Fals Fals
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="Headlines" class="headlines" data-scroll-section>
        <div class="container newspaper-page">
          <h2 class="section-header" data-scroll data-scroll-offset="20%,0">
            <div class="line" style="margin-bottom: 0.25em;" data-scroll data-scroll-offset="20%,0" />
            Una ampliació que<br>no&nbsp;&nbsp;fa&nbsp;&nbsp;bé&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;ningú
            <div class="line" data-scroll style="--delay: .5s;" />
          </h2>
          <a href="https://www.lasprovincias.es/valencia-ciudad/federacion-vecinos-exige-20210413122732-nt.html" target="_blank" rel="noopener" class="article article-1">
            <div>
              <img
                data-scroll
                data-scroll-offset="20%,0"
                src="~assets/images/lasprovincias.svg"
                alt="Las Provincias"
                class="source-logo"
                style="margin-bottom: .25em;"
              >
              <animated-headline data-scroll data-scroll-offset="20%,0" text="La federación de vecinos exige que se paralice la ampliación del puerto de València" />
            </div>
            <div data-scroll class="article-video">
              <video
                width="320"
                height="240"
                loop
                autoplay
                playsinline
                muted
                poster="~assets/videos/exhaust-poster.jpg"
              >
                <source src="~assets/videos/exhaust.mp4" type="video/mp4">
              </video>
            </div>
          </a>
          <div class="line" data-scroll data-scroll-offset="20%,0" />
          <a href="https://www.eldiario.es/comunitat-valenciana/valencia/danos-colaterales-ampliacion-puerto-valencia-erosion-playas-saler-alcanza-dunas-protegidas_1_6487618.html" target="_blank" rel="noopener" class="article article-2">
            <img
              data-scroll
              data-scroll-offset="20%,0"
              src="~assets/images/eldiario.svg"
              alt="eldiario.es"
              class="source-logo"
              style="margin-top: -.25em; margin-bottom: .75em;"
            >
            <animated-headline data-scroll data-scroll-offset="20%,0" text="Daños colaterales de la ampliación del puerto de València" />
            <animated-headline as="p" data-scroll data-scroll-offset="20%,0" text="La erosión de las playas del Saler alcanza ya las dunas protegidas" class="subtitle" />
          </a>
          <div class="line" data-scroll data-scroll-offset="20%,0" />
          <a href="https://www.valenciaextra.com/es/valencia/la-ampliacion-del-puerto-a-costa-de-la-salud-de-los-vecinos-de-poblats-maritims_158011_102.html" target="_blank" rel="noopener" class="article article-3">
            <div>
              <img
                data-scroll
                data-scroll-offset="20%,0"
                src="~assets/images/valenciaextra.svg"
                alt="eldiario.es"
                class="source-logo"
                style="margin-top: -.15em; margin-bottom: .25em;"
              >
              <animated-headline data-scroll data-scroll-offset="20%,0" text="La ampliación del Puerto, a costa de la salud de los vecinos de Poblats Marítims" />
            </div>
            <div>
              <p data-scroll data-scroll-offset="35%,0">
                Ayer el alcalde de València, Joan Ribó, volvió a pedir a la APV que el proyecto de ampliación de la nueva terminal de
                contenedores se sometiera a un nuevo estudio de impacto ambiental. Desde la presidencia de la entidad, Aurelio Martínez,
                señaló que dicha obra esta "cubierta" por el informe medioambiental que la APV obtuvo en 2007 para la ampliación norte.
              </p>
              <p data-scroll data-scroll-offset="35%,0">
                Desde el Puerto quieren modificar el antiguo proyecto para transformar la zona norte en un nuevo 'macromuelle' para contenedores, que conlleva varias acciones. Supone eliminar un contradique -en rojo en la imagen-, realizar una ampliación del 'dique de abrigo" -en verde-, y dragar y rellenar de tierra 137 hectáreas -en marrón-.
              </p>
            </div>
          </a>
          <div class="line" data-scroll data-scroll-offset="20%,0" style="margin-top: -.25em;" />
          <a href="https://valenciaplaza.com/los-estibadores-exponen-a-ribo-que-la-ampliacion-del-puerto-de-valencia-destruiria-500-empleos" target="_blank" rel="noopener" class="article article-4">
            <div data-scroll class="article-video">
              <video
                width="320"
                height="240"
                loop
                autoplay
                playsinline
                muted
                poster="~assets/videos/estibadors-poster.jpg"
              >
                <source src="~assets/videos/estibadors.mp4" type="video/mp4">
              </video>
            </div>
            <div>
              <img
                data-scroll
                data-scroll-offset="20%,0"
                src="~assets/images/valenciaplaza.svg"
                alt="Valencia Plaza"
                class="source-logo"
                style="margin-bottom: .35em;"
              >
              <animated-headline data-scroll data-scroll-offset="20%,0" text="Los estibadores exponen que la ampliación del puerto destruye 5.000 empleos" />
            </div>
          </a>
          <div class="line" data-scroll />
        </div>
      </section>
      <section id="consensus" class="consensus" data-scroll-section>
        <div class="container">
          <h2 class="section-header" data-scroll data-scroll-offset="20%,0">
            <span>Una ampliació</span>
            <strong>sense consens</strong>
          </h2>
          <div class="consensus-cols">
            <ul class="consensus-list consensus-against">
              <consensus-list-item icon="estibadors" name="Estibadors" stance="against" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="veinat" name="Veïnat" stance="against" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="ecologistes" name="Ecologistes" stance="against" data-scroll data-scroll-offset="20%,0" />
            </ul>
            <ul class="consensus-list consensus-for">
              <consensus-list-item icon="empresaris" name="Empreses contaminants" stance="for" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="vlcportauthority" name="Autoritat portuària" stance="for" data-scroll data-scroll-offset="20%,0" />
            </ul>
          </div>
        </div>
      </section>
      <section id="Proposals" class="proposals cards-section" data-scroll-section>
        <h2 class="section-header">
          <strong>10 propostes</strong><br>
          <span>per un port</span>
          <span>més sostenible</span>
        </h2>
        <div id="scroll-direction" class="container">
          <div class="cards-list">
            <div class="card-wrapper">
              <floating-card type="proposal" number="1" data-scroll data-scroll-speed="2">
                <template #top>
                  Democratitzar el Port
                </template>
                <template #bottom>
                  Volem que la ciutadania també forme part del consell d'administració de la mà dels representants polítics.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset">
              <floating-card type="proposal" number="2" data-scroll data-scroll-speed="3">
                <template #top>
                  Transferir les competències
                </template>
                <template #bottom>
                  Volem que el Port de València deixe de gestionar-lo Madrid i passe a mans de la Generalitat Valenciana.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="3" data-scroll data-scroll-speed="2">
                <template #top>
                  Un port més sostenible
                </template>
                <template #bottom>
                  Millorarem totes les infraestructures del port, per fer-les més eficients i sostenibles, utilitzant millor el sòl que ja té assignat i descentralitzant el port amb Sagunt i Gandia.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="4" data-scroll data-scroll-speed="3">
                <template #top>
                  Protegir llocs de treball
                </template>
                <template #bottom>
                  Realitzarem un estudi sobre les implicacions sociolaborals derivades de l’automatització i digitalització del sistema productiu portuari amb l'objectiu de millorar la situació laboral.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="5" data-scroll data-scroll-speed="2">
                <template #top>
                  Eliminar el dic d'abric
                </template>
                <template #bottom>
                  Garantirem la supervivència de l’Albufera, la marjal i les platges del sud i realitzarem un pla de regeneració natural de les corrents marines que renoven la sorra de les platges del sud.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="6" data-scroll data-scroll-speed="3">
                <template #top>
                  Connectar l'Albufera i València
                </template>
                <template #bottom>
                  Crearem un gran corredor verd per a mitigar els efectes del canvi climàtic i baixar la contaminació, creant una nova via d’accés sostenible i ajudant a moderar les altes temperatures de la ciutat.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="7" data-scroll data-scroll-speed="2">
                <template #top>
                  Impulsar el Corredor Mediterrani
                </template>
                <template #bottom>
                  Millorarem la connectivitat amb el ferrocarril per transport de mercaderies. El tren elèctric és molt més ecològic i barat per exportar els nostres productes que el camió.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="8" data-scroll data-scroll-speed="3">
                <template #top>
                  Renaturalitzem les platges
                </template>
                <template #bottom>
                  Impulsarem un pla de regeneració i renaturalització de les platges del sud i del nord des d’una vessant sostenible per conservar-les.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="9" data-scroll data-scroll-speed="2">
                <template #top>
                  Agenda 2030
                </template>
                <template #bottom>
                  Exigir a l’Autoritat Portuària que s’adherisca a l’Agenda 2030 sobre el desenvolupament sostenible de Port-Ciutat perquè el port deixe d’estar d’esquenes a la ciutadania i a la ciutat.
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="10" data-scroll data-scroll-speed="3">
                <template #top>
                  Nou Pla Econòmic
                </template>
                <template #bottom>
                  Dissenyarem un nou Pla Econòmic i industrial basat en el model sostenible d’economia blava que incloga, entre altres, el Pla Estratègic de Mobilitat i el Pla d’Igualtat.
                </template>
              </floating-card>
            </div>
          </div>
          <div id="direction-proposals" class="marquees">
            <div class="marquee one">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-target="#direction-proposals">
                Sostenible&nbsp;&nbsp;&nbsp;Sostenible&nbsp;&nbsp;Sostenible
              </span>
            </div>
            <div class="marquee two">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#direction-proposals">
                Participatiu&nbsp;&nbsp;&nbsp;Participatiu&nbsp;&nbsp;&nbsp;Participatiu
              </span>
            </div>
            <div class="marquee three">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="5"
                data-scroll-delay="0.05"
                data-scroll-target="#direction-proposals"
              >
                Ecologisme&nbsp;&nbsp;&nbsp;Ecologisme&nbsp;&nbsp;&nbsp;Ecologisme&nbsp;&nbsp;&nbsp;Ecologisme
              </span>
            </div>
            <div class="marquee four">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-target="#direction-proposals">
                Treball&nbsp;&nbsp;&nbsp;Treball&nbsp;&nbsp;&nbsp;Treball&nbsp;&nbsp;&nbsp;Treball
              </span>
            </div>
            <div class="marquee five">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-10"
                data-scroll-delay="0.05"
                data-scroll-target="#direction-proposals"
              >
                Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" class="section-footer" data-scroll-section>
        <h2>
          No a l'ampliació del port
        </h2>
        <div class="container">
          <p class="conclusion">
            Perquè volem un port per a València i no contra València.
          </p>
          <div class="calls-to-action">
            <a href="https://twitter.com/intent/tweet/?text=&url=https://portsostenible.com&hashtags=NoAlAmpliacióDelPort" target="_blank" rel="noopener noreferer" class="cta twitter">Fes un Tweet</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portsostenible.com" target="_blank" rel="noopener noreferer" class="cta facebook">Facebook</a>
            <a href="whatsapp://send?text=https://portsostenible.com" class="cta whatsapp">Whatsapp</a>
            <a href="https://t.me/share/url?url=https://portsostenible.com&text=" rel="noopener noreferer" target="_blank" class="cta telegram">Telegram</a>
          </div>
          <div class="author">
            <a href="https://compromis.net" target="_blank" rel="noopener noreferer" aria-label="Compromís">
              <compromis-logo />
            </a>
            <p class="author-signature">
              <strong>#PortSostenible</strong> és una campanya de
              <a href="https://compromis.net" target="_blank" rel="noopener noreferer" aria-label="Compromís">
                Compromís
              </a>
            </p>
          </div>
        </div>
      </footer>
    </LocomotiveScroll>
  </main>
</template>

<script>
import ComparisonMixin from '@/mixins/comparison-mixin'

export default {
  mixins: [ComparisonMixin]
}
</script>
