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
      window.alert("Du bist pleite :-(");
      setBetrag("");
    }
  };

  return (
    <article>
      <h1 className="title">BANANA</h1>
      <h1 className="title">BANK</h1>
      <div className="konto">
        <p className="giro">Kontostand</p>
        <p className="saldo">{saldo.toFixed(2)} €</p>
        <form>
          <input
            className="geldbetrag"
            type="number"
            placeholder="Betrag in €"
            required
            step=".01"
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
      <button className="reload" onClick={() => location.reload()}>
        reload
      </button>
    </article>
  );
};

export default Banana;
