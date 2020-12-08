import SVG from 'react-inlinesvg'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import arrow from '../../images/icons/arrowright.svg';

import './button.scss'

const isExternalLink = (url) => {
  const re = new RegExp('^(http|https)://', 'i');
  return re.test(url);
}

const Button = ({ url, children, className = '' }) => {
  if (isExternalLink(url)) {
    return (
      <a href={url} className={classNames('button', className)} rel="noopener noreferrer" target="_blank">
        {children}
        <SVG src={arrow} />
      </a>
    )
  } else {
    return (
      <Link to={url} className={classNames('button', className)}>
        {children}
        <SVG src={arrow} />
      </Link>
    )
  }
}
export default Button;