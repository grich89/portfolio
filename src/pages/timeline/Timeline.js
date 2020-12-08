import ReactHtmlParser from 'react-html-parser';

import './timeline.scss';

import data from './data.js';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__container">
        <h1 className="timeline__title">{data.title}</h1>

        <ul className="timeline__inner">
          {data.timeline?.map((row, i) => (
            <li key={i} className="timeline__inner-milestone">
              <strong>{row.year}</strong>
              <p>{ReactHtmlParser(row.milestone)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline;