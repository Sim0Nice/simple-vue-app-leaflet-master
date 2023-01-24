<template>
  <v-card>
    <div id="descriptionCard">
      <div v-if="type === 'Steinpilz'">
        <img
          src="https://www.bluehendesoesterreich.at/sites/default/files/styles/content_image_1x/public/2019-08/steinpilz_ines_lemberger.jpg?itok=SYViMAv0"
          alt="Steinpilz"
          style="width: 100%"
        />
        <h2>Steckbrief: Der Steinpilz</h2>
        <h3 style="font-style: italic">[Boletus edulis]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> September bis Oktober</p>
        <p>
          <strong>Fundorte:</strong> feuchte Umgebung, ansonsten anspruchslos
        </p>
        <br />
        <p style="text-align: left">
          Der Steinpilz oder Herrenpilz (Boletus edulis) ist vor allem in
          Mitteleuropa verbreitet. Auf dem am Ansatz bauchigen und sich nach
          oben hin verdünnenden, bis zu 20 cm langen Stiel, sitzt ein dicker
          Hut, dessen Farbton zwischen hell- und dunkelbraun variiert und zum
          Hutrand hin heller wird. Die Poren werden mit dem Alter gelb/grün
          statt weiß. Bei älteren Exemplaren ist der Hut zur Gänze ausgeklappt,
          sodass die Oberfläche glatt ist. Als Delikatesse der europäischen
          Küche ist dieser Dickröhrling für seinen einzigartigen nussigen,
          milden Geschmack bekannt.
        </p>
        <br />
      </div>
      <div v-else-if="type === 'Pfifferling'">
        <img
          src="https://www.bluehendesoesterreich.at/sites/default/files/styles/content_image_1x/public/2019-08/eierschwammerl-1558873_1920.jpg?itok=SRlADI9i"
          alt="Pfifferling"
          style="width: 100%"
        />
        <h2>Steckbrief: Der Pfifferling</h2>
        <h3 style="font-style: italic">[Cantharellus cibarius]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> Juni bis Oktober</p>
        <p><strong>Fundorte:</strong> Nadel- und Laubwälder</p>
        <br />
        <p style="text-align: left">
          Eierschwammerl (Cantharellus cibarius) sind in ganz Europa weit
          verbreitet und wachsen sowohl in Nadel- als auch in Laubwäldern. Am
          wohlsten fühlen sie sich dort wo es etwas feuchter ist, im dichten
          Moos oder im Gras unter Fichten. Je nach der Art des Waldes hat der
          Fruchtkörper des Eierschwammerls eine weißgelbe bis dottergelbe
          Färbung. Das feste, würzige Fleisch mit feiner Schärfe wird aufgrund
          seines unverkennbaren Geschmacks geschätzt und verfeinert
          Semmelknödel, Eierspeisen, Risotti und Salate mit ihrem
          pfefferähnlichen Geschmack.
        </p>
        <br />
      </div>
      <div v-else-if="type === 'Herbsttrompete'">
        <img
          src="https://wildpflanzen.s3.eu-central-1.amazonaws.com/wp-content/uploads/2020/11/05131818/herbsttrompete-pilz-im-wald_adobestock_57663090_510x383_72dpi-med-480x360.jpg"
          alt="Herbsttrompete"
          style="width: 100%"
        />
        <h2>Steckbrief: Die Herbsttrompete</h2>
        <h3 style="font-style: italic">[Craterellus cornucopioides]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> September bis November</p>
        <p><strong>Fundorte:</strong> Kalkböden mit hoher Feuchtigkeit</p>
        <br />
        <p style="text-align: left">
          Die Herbsttrompete (Craterellus cornucopioides) findet man, wenig
          überraschend, erst im Spätsommer und Herbst. Sie wächst in Laubwäldern
          und bevorzugt Kalkböden mit hoher Feuchtigkeit. Der Fruchtkörper
          wächst in einer nach unten gerichteten Trichterform und kann bis zu 10
          cm breit werden. Trotz der erdigen, gräulichen Farbe erinnert der Pilz
          ein wenig an eine exotische Blume. Die Herbsttrompete findet als
          außerordentlich aromatischer Speisepilz aufgrund seiner großen
          Würzkraft häufig in getrockneter Form Anwendung in der Küche.
        </p>
        <br />
      </div>
      <div v-else-if="type === 'Schoftintling'">
        <img
          src="https://www.bluehendesoesterreich.at/sites/default/files/styles/content_image_1x/public/2019-08/schopftintling-coprinus-comatus.jpg?itok=hk7PPnHK"
          alt="Schoftintling"
          style="width: 100%"
        />
        <h2>Steckbrief: Der Schoftintling</h2>
        <h3 style="font-style: italic">[Coprinus comatus]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> Mai bis November</p>
        <p><strong>Fundorte:</strong> Wald- und Wegränder</p>
        <br />
        <p style="text-align: left">
          Die Gattung der Tintlinge umfasst, mit wenigen Ausnahmen,
          hauptsächlich ungenießbare Pilzarten. Eine dieser Ausnahmen, der
          Schopftintling (Coprinus comatus), sprießt aus grasigen Standorten und
          ist somit an Wald- und Wegrändern sowie auf Wiesen und in Gärten
          anzutreffen. Der hochstielige Bruder der Champignons steht häufig in
          großen Gruppen, kann aber auch einzeln auftreten. Der sehr weiche,
          pelzige Hut von weißer Farbe fällt seitlich vom Stamm flach ab. Das
          Fleisch junger Schopftintlinge hat einen leicht würzigen Geschmack und
          weist ein sehr mildes Aroma auf, welches ein wenig an Spargel
          erinnert.
        </p>
        <br />
      </div>
      <div v-else-if="type === 'Krause Gluke'">
        <img
          src="https://www.bluehendesoesterreich.at/sites/default/files/styles/content_image_1x/public/2019-08/1620px-krause_glucke_sparassis_crispa_h._krisp_cc-by-3.0.jpeg?itok=6Bw8QjC4"
          alt="Krause Glucke"
          style="width: 100%"
        />
        <h2>Steckbrief: Die Krause Gluke</h2>
        <h3 style="font-style: italic">[Sparassis crispa]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> August bis Oktober</p>
        <p><strong>Fundorte:</strong> An Stämmen alter Kifern</p>
        <br />
        <p style="text-align: left">
          Die Krause Glucke (Sparassis crispa) ist der Beweis, das auch
          Parasiten wunderbar schmecken können. Sie befällt im Flachland und
          niedrigen Berglagen die Stämme von alten Kiefern. Ihr Fruchtkörper
          ähnelt in seinem Aussehen stark einem Badeschwamm und kann einen
          Durchmesser von bis zu 40 cm und ein Gewicht von über einem Kilogramm
          erreichen. Damit sie ihren unverkennbaren pilzig, nussigen und
          waldigen Geschmack nicht verlieren, sollten sie nicht gewaschen
          werden, sondern wie ein Blumenkohl zerlegt, den Strunk entfernen, und
          mit einem Pinsel sorgfältig putzen. Die etwas aufwendigere Reinigung
          während der Verarbeitung macht die Krause Glucke durch ihren Geschmack
          in verschiedensten Gerichten aber allemal wett.
        </p>
        <br />
      </div>
      <div v-else-if="type === 'Speise Morchel'">
        <img
          src="https://www.bluehendesoesterreich.at/sites/default/files/styles/content_image_1x/public/2019-08/morel-1336524_1920.jpg?itok=gjjETfxz"
          alt="Speise Morchel"
          style="width: 100%"
        />
        <h2>Steckbrief: Die Speise Morchel</h2>
        <h3 style="font-style: italic">[Morchella esculenta]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> April bis Mai</p>
        <p><strong>Fundorte:</strong> In Hecken und Gebüschen</p>
        <br />
        <p style="text-align: left">
          Die Speise-Morchel (Morchella esculenta) wächst von April bis Mai in
          Auwäldern, in Hecken und Gebüschen, im offenen Gras oder unter Eschen.
          Sie ist ebenso häufig einzeln wie in kleineren Gruppen anzutreffen.
          Speise-Morcheln werden bis zu 12 cm hoch. Der dunkle, brüchige Hut mit
          seinen kleinen Kammern ist fest mit dem kurzen weißen Stiel
          verwachsen. Diese Morchel sticht unter den Speisepilzen durch ihren
          unverwechselbaren Geschmack hervor. Ihr starkes Aroma verleiht jedem
          Gericht, in dem sie verwendet wird, eine feine würzige Note.
        </p>
        <br />
      </div>
      <div v-else-if="type === 'Birken-Rotkappe'">
        <img
          src="https://www.bluehendesoesterreich.at/sites/default/files/styles/content_image_1x/public/2019-08/morel-1336524_1920.jpg?itok=gjjETfxz"
          alt="Birken-Rotkappe"
          style="width: 100%"
        />
        <h2>Steckbrief: Die Birken-Rotkappe</h2>
        <h3 style="font-style: italic">[Morchella esculenta]</h3>
        <br />
        <p><strong>Reife und Erntezeit:</strong> Juni bis Oktober</p>
        <p><strong>Fundorte:</strong> Nadel- und Kieferwälder</p>
        <br />
        <p style="text-align: left">
          Die Birken-Rotkappe (Leccinum versipelle) tritt immer in Kombination
          mit Birken, am liebsten in heideartiger Umgebung, aber auch in Nadel-
          und Kiefernwäldern mit eingestreuten Birken, auf saurem Boden auf. In
          warmen Sommern mit ausreichend Regen sprießt sie oft in großen Mengen.
          Der weiße Stiel ist mit schwarzen Schüppchen gesprenkelt und trägt
          einen, zunächst kugeligen, dann bis zu 20 cm breiten Hut mit glatter
          Haut die unterschiedliche Orange- und Rottöne aufweisen kann. Aufgrund
          ihres milden und angenehmen Pilzgeschmacks, der nicht zu stark
          hervorsticht, und der vielfältigen Verarbeitungsmöglichkeiten des
          festen Fleisches, bietet sich die Rotkappe ideal als Mischpilz in
          einer Pilzpfanne an.
        </p>
        <br />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FungiDescription",
  props: ["type"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>
