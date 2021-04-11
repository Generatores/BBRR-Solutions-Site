import "./body.css";
import "./news-and-events.css";

import Homeisland from "../components/home-island.js";

import News1 from "../assets/JSON/news/new-1.json";
import News2 from "../assets/JSON/news/new-2.json";
import News3 from "../assets/JSON/news/new-3.json";

export default function Newsandevents() {
  return (
    <div className='body'>
      <div className='news_container'>
        <Homeisland title={News3.title} text={News3.text} />
        <Homeisland title={News2.title} text={News2.text} />
        <Homeisland title={News1.title} text={News1.text} />
      </div>
    </div>
  );
}
