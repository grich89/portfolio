import SVG from 'react-inlinesvg'

import github from '../../images/icons/social/github.svg';
import linkedin from '../../images/icons/social/linkedin.svg';
import email from '../../images/icons/social/email.svg';

import './footer.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <nav>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gregory-rich-7935b522"
                rel="noreferrer">
                <SVG src={linkedin} />
                <span className="hidden">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/grich89"
                rel="noreferrer">
                <SVG src={github} />
                <span className="hidden">GitHub</span>
              </a>
            </li>
            <li>
              <a href="mailto:gregorysrich@gmail.com">
                <SVG src={email} />
                <span className="hidden">Email me</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer