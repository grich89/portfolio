import {
  Link
} from "react-router-dom";

import './primary-nav.scss';

const PrimaryNav = () => {
  return(
    <div className="primary-nav">
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/timeline">Timeline</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PrimaryNav