import "./App.css";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import meny from "./data/many.js";

function App() {
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
