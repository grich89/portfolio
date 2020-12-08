import {useState} from 'react';
import { CSSTransition } from 'react-transition-group'
import ReactHtmlParser from 'react-html-parser';
import SVG from 'react-inlinesvg';

import explore from '../../images/icons/audit.svg';

import './work.scss';

import Project from '../../components/Project/Project.js';

import data from './data.js';

const Work = () => {
  const [currentProject, setCurrentProject] = useState('');
  const [projectOpen, setProjectOpen] = useState(false);

  const showProject = (project) => {
    setCurrentProject(project.details);
    setProjectOpen(true);
  }

  return (
    <div className="work">
      <div className="container">
        {projectOpen ?
          <CSSTransition
            in={projectOpen}
            classNames="fade"
            timeout={600}
            unmountOnExit
            appear
          >
            <Project
              details={currentProject}
              setProjectOpen={setProjectOpen}
            />
          </CSSTransition>
        :
        <div className="work__projects-wrapper">
          <div className="work__intro">
            <h1>{data.title}</h1>
            {ReactHtmlParser(data.description)}
          </div>

          <ul className="work__projects">
            {data.projects?.map((project, i) => (
              <li
                key={i}
                className="work__project"
              >
                <div>
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                </div>

                <button
                  onClick={() => showProject(project)}
                  className="work__project-expand">
                  <SVG src={explore} />
                  Explore
                </button>
              </li>
            ))}
          </ul>
        </div>
        }
      </div>
    </div>
  );
}

export default Work;