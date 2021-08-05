import './TopSection.scss'
import { ScrollTo } from "react-scroll-to";

export default function TopSection() {

  return (<section className="top-section">
    <div className="top-section_intro">
      <p>Hi, my name is</p>
      <h1>Joanna Dyczka</h1>
      <div className="frame">
        <p className="subtitle">I am a web designer & developer based in Lodz, Poland</p>
        <p>I am passionate about creating clean-looking web content, writing clean code and preserving clean Earth.</p>
        <p>I love the challange of implementing unusual design ideas and features and figuring out how it can be done in the simplest possible&nbsp;way.</p>
      </div>
    </div>
    <div className="arrow-box">
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
    </div>
  </section>);
}