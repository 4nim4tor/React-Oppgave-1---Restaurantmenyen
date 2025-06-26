import "./App.css";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const meny = [
    {
      id: 1,
      tittel: "Spaghetti Bolognese",
      pris: "159 kr",
      beskrivelse:
        "En ekte italiensk klassiker med al dente spaghetti badet i en rik og fyldig kjøttsaus, toppet med nyrevet parmesan for den perfekte smaksbalansen.",
      ingredienser: "Spaghetti, kjøttsaus, parmesan",
      kategori: "Hovedrett",
    },
    {
      id: 2,
      tittel: "Kremet Kyllingsuppe",
      pris: "129 kr",
      beskrivelse:
        "En varmende, silkemyk suppe med saftig kylling, søte gulrøtter og sprø selleri i en kremet, smakfull base – perfekt for en lett, men smakfull start.",
      ingredienser: "Kylling, fløte, gulrøtter, selleri",
      kategori: "Forrett",
    },
    {
      id: 3,
      tittel: "Margarita Pizza",
      pris: "169 kr",
      beskrivelse:
        "En sprøstekt pizzabunn toppet med fløyelsmyk tomatsaus, fyldig mozzarella og frisk basilikum – en tidløs smaksopplevelse med enkel og ren smak.",
      ingredienser: "Tomatsaus, mozzarella, basilikum",
      kategori: "Hovedrett",
    },
    {
      id: 4,
      tittel: "Sushi Mix",
      pris: "229 kr",
      beskrivelse:
        "En utsøkt samling av fersk laks, tunfisk og reker servert på perfekt kokt ris, med delikate smaker fra havet og en harmonisk balanse i hver bit.",
      ingredienser: "Laks, tunfisk, reker, ris",
      kategori: "Hovedrett",
    },
    {
      id: 5,
      tittel: "Cæsarsalat",
      pris: "139 kr",
      beskrivelse:
        "En frisk og sprø romanosalat toppet med saftig grillet kylling, sprø krutonger, fløyelsmyk Cæsardressing og generøse flak av parmesan – lett, men tilfredsstillende.",
      ingredienser: "Romanosalat, kylling, parmesan, dressing",
      kategori: "Forrett",
    },
    {
      id: 6,
      tittel: "Brownie med Is",
      pris: "89 kr",
      beskrivelse:
        "En varm, klissete sjokoladebrownie servert med en silkemyk kule vaniljeis og overøst med rennende, mørk sjokoladesaus – en uimotståelig dessertdrøm.",
      ingredienser: "Brownie, vaniljeis, sjokoladesaus",
      kategori: "Dessert",
    },
    {
      id: 7,
      tittel: "Taco Tallerken",
      pris: "199 kr",
      beskrivelse:
        "En fargerik og smaksrik tallerken med krydret kjøttdeig, sprø mais, smeltet ost og frisk, kremet guacamole – en fest av meksikanske smaker.",
      ingredienser: "Kjøttdeig, mais, ost, guacamole",
      kategori: "Hovedrett",
    },
    {
      id: 8,
      tittel: "Pannekaker med Syltetøy",
      pris: "99 kr",
      beskrivelse:
        "Luftige og gylne pannekaker servert med søtt jordbærsyltetøy og et lett dryss av sukker – en enkel, men nostalgisk dessertfavoritt.",
      ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
      kategori: "Dessert",
    },
    {
      id: 9,
      tittel: "Reker med Sitron",
      pris: "149 kr",
      beskrivelse:
        "Ferske, saftige reker servert med nystekt brød, frisk dill og sitronbåter som løfter smaken – perfekt som en lett og elegant forrett.",
      ingredienser: "Reker, sitron, dill, brød",
      kategori: "Forrett",
    },
    {
      id: 10,
      tittel: "Entrecôte med Grønnsaker",
      pris: "289 kr",
      beskrivelse:
        "En mør og saftig entrecôte servert med smørdampede grønnsaker, ovnsbakte poteter og en fyldig peppersaus – en klassisk og kraftfull hovedrett som tilfredsstiller.",
      ingredienser: "Entrecôte, asparges, poteter, peppersaus",
      kategori: "Hovedrett",
    },
  ];

  const kategoriBasedOrder = { Forrett: 1, Hovedrett: 2, Dessert: 3 };

  const sortertMeny = [...meny].sort(
    (a, b) => kategoriBasedOrder[a.kategori] - kategoriBasedOrder[b.kategori]
  );

  return (
    <>
      <Header />
      <Menu retter={sortertMeny} />
      <Footer />
    </>
  );
}

export default App;
