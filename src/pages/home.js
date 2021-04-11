import "./body.css";
import "./home.css";

import Homeisland from "../components/home-island.js";
import Island1 from "../assets/JSON/home/island-1.json";
import Island2 from "../assets/JSON/home/island-2.json";
import Island3 from "../assets/JSON/home/island-3.json";
import Island4 from "../assets/JSON/home/island-4.json";

export default function Home() {
  return (
    <div className='body'>
      <Homeisland title={Island1.title} text={Island1.text} />
      <br />
      <div className='minor_islands'>
        <Homeisland text={Island2.text} />
        <Homeisland text={Island3.text} />
        <Homeisland text={Island4.text} />
      </div>
    </div>
  );
}
