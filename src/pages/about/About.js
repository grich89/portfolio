import HTMLReactParser from 'html-react-parser';
import SVG from 'react-inlinesvg'

import './about.scss'

import Button from '../../components/Button/Button.js';

import data from './data.js';

function About() {
  return (
    <div className="about">
      <div className="about__offerings">
        <h1>{data.offerings.title}</h1>
        {HTMLReactParser(data.offerings.description)}

        <ul className="about__offerings-grid">
          {data.offerings.list?.map((item, i) => (
            <li
              key={i}
              className={item.class ? `about__offerings-grid--item ${item.class}` : 'about__offerings-grid--item'}
            >
              <SVG src={item.icon} />
              <span>{HTMLReactParser(item.text)}</span>
            </li>
          ))}
        </ul>

        <div className="about__cta">
          <Button
            children="Timeline"
            url="/timeline"
          />
        </div>
      </div>
    </div>
  );
}

export default About;