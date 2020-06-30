// import 'common/index.css';
import { history } from 'umi';
import { useEffect, useState } from 'react';
import './index.less';
import Markdown from 'components/markdown';
import { articleData, info } from 'config/user/index';
import { Helmet } from 'react-helmet';

// import content from '../../source/git知多少.md';
// function importContent(title) {

// }

export default () => {
  const [content, setContent] = useState('');
  const [info, setInfo] = useState({});
  useEffect(() => {
    // importContent(history.location.query.title);
    let { id } = history.location.query;
    let { title } = articleData.filter(e => +e.date === +id)[0]
    console.log(id, articleData, title)
    const content = require(`../../source/${decodeURI(title)}.md`).default;
    setContent(content);
    let info = {};
    let infoArr = content
      .slice(content.indexOf('<!--') + 4, content.indexOf('-->'))
      .replace(/\n/g, ',')
      .split(',');
    infoArr.forEach(item => {
      if (item) {
        let [key, value] = item.split(':');
        console.log(item, key, value, 'key, value')
        if (key && key.trim()) {
          info[key] = value.trim();
        }
      }
    });
    setInfo(info);
  }, []);

  var regex = /\#+/g;
  let arr = []
  console.log(content.match(regex))
  return (
    <div className="article-detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{info.title}</title>
        <meta name="description" content={`付大强,${info.title}`} />
        <meta name="keywords" content={`付大强,${info.title}`} />
      </Helmet>
      <div className="markdown-wrap">
        <div className="markdown-wrap-title">{info.title}</div>
        <div className="markdown-wrap-time">{info.date}</div>
        <Markdown
          option={{ head: false, editor: false, view: true, content }}
        ></Markdown>
      </div>
    </div>
  );
};
