import ReactHtmlParser from 'react-html-parser';

import Button from '../../components/Button/Button.js';

import './home.scss';

import data from './data.js';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>{ReactHtmlParser(data.title)}</h1>
        {ReactHtmlParser(data.description)}
        {data.cta ?
          <Button
            url={data.cta.url}
            children={data.cta.text}
          />
        : ''}
      </div>
    </div>
  );
}

export default Home;