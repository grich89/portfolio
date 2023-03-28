import HTMLReactParser from 'html-react-parser';
import SVG from 'react-inlinesvg';

import arrow from '../../images/icons/arrowright.svg';

import './project.scss';

import Picture from '../Picture/Picture.js';
import Button from '../Button/Button.js';

const Project = ({setProjectOpen, details }) => {
  return (
    <div className="project">
      <div className="project__wrapper">
        <div className="project__media">
          {details.desktop ?
            <div className="project__media-desktop">
              <Picture
                image={details.desktop.src}
                altText={details.desktop.alt}
              />
            </div>
          : null}

          {details.mobile ?
            <div className="project__media-mobile">
              <Picture
                image={details.mobile.src}
                altText={details.mobile.alt}
              />
            </div>
          : null}
        </div>
        <div className="project__text">
          <button
            className="project__close"
            onClick={() => setProjectOpen(false)}
            >
            <SVG src={arrow} />
            Back
          </button>

          <h1>{details.title}</h1>

          {HTMLReactParser(details.description)}

          <Button
            url={details.link}
            children="Live Demo"
          />
        </div>
      </div>
    </div>
  )
}
export default Project;