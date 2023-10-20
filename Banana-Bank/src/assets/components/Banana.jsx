import { useState } from "react";
import "./Banana.css";

const Banana = () => {
  const [saldo, setSaldo] = useState(0);
  const [betrag, setBetrag] = useState("");

  const einzahlen = () => {
    setSaldo(saldo + Number(betrag));
    setBetrag("");
  };

  const auszahlen = () => {
    if (saldo > betrag) {
      setSaldo(saldo - betrag);
      setBetrag("");
    } else {
      window.alert("Du kannst leider nicht so viel Geld abheben :-(");
      setBetrag("");
    }
  };

  return (
    <section>
      <h1 className="title">Banana Bank</h1>
      <div className="konto">
        <p className="giro">Mein Girokonto</p>
        <p className="saldo">{saldo.toFixed(2)} €</p>
        <form>
          <input
            className="geldbetrag"
            type="number"
            placeholder="Betrag in €"
            onChange={(event) => setBetrag(event.target.value)}
            value={betrag}
          />
        </form>
        <button className="einzahlen" onClick={einzahlen}>
          Einzahlen
        </button>
        <button className="auszahlen" onClick={auszahlen}>
          Auszahlen
        </button>
      </div>
    </section>
  );
};

export default Banana;
