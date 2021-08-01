
import { ScrollTo } from "react-scroll-to";

export default function TopSection() {

    return (<section className="top-section">
        <p>Hi, my name is</p>
        <h1>Joanna Dyczka</h1>
        <div className="frame">
            <p className="subtitle">I am a web designer & developer based in Lodz, Poland</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea officiis tempora iure qui aliquid soluta natus, deleniti velit sed! Laudantium nisi fuga corrupti dolore est animi nobis nulla voluptatem.</p>
        </div>
        <ScrollTo>
        {({ scroll }) => (
          <a 
          className="arrow" 
          href="#works" 
          onClick={ev => {
              ev.preventDefault();
              const y = document.getElementById('works').getBoundingClientRect().top
              scroll({ y: y, smooth: true })
          }}>See more</a>
        )}
      </ScrollTo>
    </section>);
}